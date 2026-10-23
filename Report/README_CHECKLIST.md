# Đánh giá dự án Bloxorz Solver so với đề bài CSC14003 - Project 1

## 1. Tổng quan nhanh
- **Repository**: D:\csttnt\Project1
- **Source code**: D:\csttnt\Project1\Source (Python, pygame + PyOpenGL, pytest)
- **Tests**: **168 passed** (chạy `python -m pytest tests/ -q`)
- **GUI**: Có 3D GUI bằng PyOpenGL (`gui_gl.py`, 1178 dòng) + CLI
- **Solvers**: BFS, DFS, IDS, UCS, A* (tự cài đặt, không dùng thư viện search)
- **Stages**: 15 stage, chia 4 nhóm (A-D), gồm stage lớn 15×15 và stage kết hợp nhiều loại tile
- **Experiments**: Có `experiments/run_experiments.py`, `make_charts.py`, `results.csv`, `charts/` đầy đủ

## 2. Checklist theo yêu cầu đề bài (AI_Project_1.md)

### 2.1 Reimplement the Game (20 pts) - MANDATORY GUI
| Yêu cầu | Trạng thái | Ghi chú |
|---|---|---|
| **MUST HAVE a GUI** (web/desktop) | ✅ ĐẠT | `gui_gl.py` - 3D OpenGL GUI bằng pygame+PyOpenGL. `main.py` mặc định chạy GUI. |
| **Core mechanics (10 pts)**: board floor/void/goal, block 1×1×2 3 orientations, 4 rolling moves, illegal move detection, win detection (standing on goal) | ✅ ĐẠT | `bloxorz/engine.py`, `bloxorz/stage.py`. Roll transition table đúng chuẩn. Win chỉ khi `mode==block, orient==S, pos==goal`. |
| **Advanced tiles (10 pts)**: fragile tiles, bridges, 3 switch types (soft, heavy, split), block splitting/rejoining, toggle/permanent bridge behavior | ✅ ĐẠT | Đầy đủ trong engine + tests. Split switch teleport + **tự động merge khi hai cube kề nhau**. Bridge state là part của `GameState`. Soft switch chỉ kích hoạt ô mới đi vào; permanent bridge có stage riêng (Level 12). Parser validate bridge index, start và teleport target. |
| **Display basic controls** (New Game, Restart, buttons for solvers) | ✅ ĐẠT | GUI có buttons: New Game, Restart, < >, Undo, Stop, BFS/DFS/IDS/UCS/A*. Có keyboard controls đầy đủ. |

### 2.2 BFS Solver (10 pts)
| Yêu cầu | Trạng thái | Ghi chú |
|---|---|---|
| Implement BFS | ✅ ĐẠT | `solve_bfs()` trong `bloxorz/search.py:167-200` |
| Record Search Time, Memory Usage, Expanded Nodes, Solution Length | ✅ ĐẠT | `SearchResult` có đầy đủ fields. GUI hiển thị. Experiments đo đầy đủ. |

### 2.3 DFS Solver (10 pts)
| Yêu cầu | Trạng thái | Ghi chú |
|---|---|---|
| Implement DFS. Có thể dùng IDS thay thế nếu nói rõ trong report | ✅ ĐẠT (cả 2) | Có cả `solve_dfs()` và `solve_ids()` với transposition table per-iteration. `main.py` hỗ trợ DFS, IDS. |
| Handle repeated states to avoid cycles | ✅ ĐẠT | DFS dùng `visited` set. IDS dùng per-iteration table theo depth. |

### 2.4 UCS Solver (10 pts)
| Yêu cầu | Trạng thái | Ghi chú |
|---|---|---|
| Implement UCS | ✅ ĐẠT | `solve_ucs()` |
| Define and justify cost function in report | ⚠️ CẦN VIẾT VÀO REPORT | Cost model `risk` đã implement tốt: switch press cheap (1), normal roll 2, fragile landing +1, X costs 1. Có tests chứng minh. Cần giải thích rõ rationale trong báo cáo. |
| Non-uniform cost function (not just rename of BFS) | ✅ ĐẠT | Risk cost khác hẳn uniform; UCS/A* dùng risk mặc định. Tests chứng minh UCS/A* agree on optimal risk cost. |

### 2.5 A* Solver (10 pts)
| Yêu cầu | Trạng thái | Ghi chú |
|---|---|---|
| Implement A* with appropriate heuristic | ✅ ĐẠT | `GoalDistanceHeuristic` - 0-1 BFS trên relaxed grid (ignore bridges/fragile/switches, teleport cost 0), `h(s)=min_c ceil(D(c,goal)/2)` |
| Explain heuristic design, admissible/consistent with arguments | ⚠️ CẦN VIẾT VÀO REPORT | Heuristic đã kiểm chứng admissible/consistent (tests + exhaustive check trên map teleport). Cần trình bày lý luận 0-1 BFS và teleport cost 0 trong báo cáo. |
| Must be admissible w.r.t. chosen cost function | ✅ ĐẠT | Tests chứng minh admissible với cả uniform và risk (mọi cost >= 1). |

### 2.6 Report (30 pts)
| Mục | Trạng thái | Ghi chú |
|---|---|---|
| Project Planning and Task Distribution (with % completion) | ❌ THIẾU | **Cần tạo Report.pdf** với phần này. Chưa có file báo cáo. |
| Algorithm Description (10 pts): BFS, DFS/IDS, UCS, A*, state representation, actions, transition, goal test, cost, heuristic, avoid revisiting | ❌ THIẾU | Cần viết chi tiết trong report. |
| Experiments (20 pts): test cases grouped by difficulty, tables, charts, insights/strengths/weaknesses | ⚠️ CÓ DỮ LIỆU NHƯNG CẦN TRÌNH BÀY | Có `results.csv`, `charts/*.png`, `charts/summary.md` đầy đủ. Cần tổng hợp vào report đúng format. |
| References and Appendix (AI usage) | ❌ THIẾU | Cần viết trong report. |

### 2.7 Video (10 pts)
| Yêu cầu | Trạng thái | Ghi chú |
|---|---|---|
| Upload to YouTube (public), link in report | ❌ CHƯA CÓ | **Cần làm video demo**: GUI, board/tile types/orientations/controls, play manually, run solvers, show solution replay. Có subtitle/narration (EN/VN). |

## 3. Đánh giá code quality & implementation chi tiết

### 3.1 Core (engine/stage/search) - EXCELLENT
- **State representation**: `GameState` frozen dataclass, hashable, đầy đủ (mode/orient/pos/active/bridges). Bridges trong state đúng yêu cầu.
- **Transition model**: `roll()` table đúng, `landing_state()` tách biệt rõ ràng, `result()` xử lý đầy đủ luật chơi.
- **Switches**: soft/heavy/split đúng điều kiện kích hoạt. Split teleport + tự động merge. Toggle/permanent đúng.
- **Bridges**: đóng/mở/khóa (locked) với bits. Bridge closing có thể gây block fall - đã xử lý.
- **Cost model**: `risk` rất tốt, dùng landing state nhất quán với engine. Tests chứng minh không có inconsistency.
- **Heuristic**: admissible/consistent, precompute từ goal ngược. Hoạt động tốt với split states.
- **Search**: Tất cả implement từ scratch, có metrics đầy đủ, tracemalloc đo memory.

### 3.2 GUI (gui_gl.py) - VERY GOOD, một vài issue nhỏ
**Điểm mạnh:**
- 3D thực tế bằng PyOpenGL, lighting, animation lăn mượt, camera orbit/zoom, goal sink effect
- Hiển thị đầy đủ tile types, switch shapes, bridge states
- Buttons + keyboard controls đầy đủ
- Replay solver với progress bar, animation
- Hiển thị metrics trong panel (solution length, path cost, expanded nodes, time, memory, max frontier)
- Undo, restart, stage switching, stop/cancel solver và replay
- Screenshot support cho README

**Issues tìm thấy (các mục gạch ngang đã sửa):**
1. ~~**Solver chạy sync** → GUI freeze khi tìm kiếm~~ - đã sửa: solver chạy trong thread nền, GUI poll kết quả, nút Stop hủy solver qua `should_stop`.
2. **`"New Game"` label misleading** - thực chất là quay về stage 1, không tạo game mới (line 905-907)
3. ~~**`Stop` không reset `active_algo` highlight**~~ - đã sửa: Stop reset highlight và status.
4. ~~**`result` không bị clear khi player move thủ công**~~ - đã sửa: move thủ công clear result/highlight.
5. ~~**Texture cache key thiếu font identity**~~ - đã sửa: key có `id(font)`.
6. ~~**Một vài dead code** (STATUS_COLORS, _c255)~~ - đã xóa.
7. ~~**Void tiles không có legend entry**~~ - đã thêm "Void" vào legend.
8. ~~**Merge thủ công bằng phím `M`**~~ - đã sửa: hai cube tự động ghép khi nằm trên hai ô kề nhau; bỏ action `M` và phím GUI tương ứng.

Nhìn chung GUI **đạt yêu cầu**: "The GUI must also display the basic controls..." và hiển thị metrics, replay solution. Rất tốt hơn yêu cầu tối thiểu.

### 3.3 Tests - EXCELLENT
168 tests bao phủ: engine basics, advanced tiles, all solvers on all 15 stages (replay validity), BFS optimality vs IDS, heuristic admissible/consistent kể cả teleport, cost models, every transition >=1 cost, UCS==A* on risk cost, UCS chọn đường dài hơn nhưng risk thấp hơn BFS, soft switch không kích hoạt lại, permanent bridge, parser validation, timeout/hủy DFS-IDS, measurement hai lượt, IDS bounded on open field, error handling. Coverage rất tốt.

### 3.4 Experiments - EXCELLENT
Có đầy đủ dữ liệu 15 stage, charts, summary. Thời gian đo ở lượt không bật `tracemalloc`; bộ nhớ đo ở lượt riêng. DFS/IDS có `--timeout`, CSV có cột `timed_out`. Averages khớp với README.

## 4. Những gì CÒN THIẾU so với đề bài

### CRITICAL (có thể ảnh hưởng điểm)
1. **Report.pdf** - **HOÀN TOÀN THIẾU**. Đề bài yêu cầu submit report PDF 30 điểm. Cần viết đầy đủ tất cả sections.
2. **Video demo on YouTube (public) + link in report** - **THIẾU**. 10 điểm.

### IMPORTANT (nên có trong report)
3. **Project Planning and Task Distribution** - cần ghi rõ thành viên, nhiệm vụ, % hoàn thành, tính điểm cá nhân.
4. **Algorithm Description chi tiết** - BFS/DFS/IDS/UCS/A* explanation, formalization (state, actions, transition, goal test, cost, heuristic, visited).
5. **Experiments presentation** - đã có data nhưng cần viết analysis/insights/discussion theo yêu cầu.
6. **References + Appendix (AI usage)** - cần ghi rõ nếu dùng LLM.

### MINOR
7. **Có thể nói rõ trong report**: dùng IDS thay thế DFS thuần túy (project dùng cả hai, IDS có transposition table)
8. **Giải thích cost function risk** rõ ràng hơn trong report

## 5. Khuyến nghị hành động ngay

### Bước 1: Tạo Report.md (trước khi convert sang PDF)
Viết report đầy đủ theo cấu trúc đề bài. Tôi có thể giúp viết nếu user cung cấp thông tin nhóm (tên, MSSV, phân chia công việc).

### Bước 2: Quay video demo
Cần quay video ngắn (2-4 phút) demo:
- GUI overview, tile types, orientations, controls
- Play manual: roll block, trigger switch, win
- Run solvers (BFS/UCS/A*) show solution replay với animation
- Có narration/subtitle VN hoặc EN

### Bước 3: Kiểm tra lại submission structure
Đảm bảo cấu trúc đúng: `StudentID1_.../Source/...` + `Report.pdf` ở root

## 6. Đánh giá tổng thể

**Implementation quality: 9.5/10**
- Game mechanics: đầy đủ, chính xác
- Solvers: đầy đủ, đúng thuật toán
- GUI: xuất sắc (3D)
- Tests: toàn diện
- Experiments: chuyên nghiệp

**Báo cáo + Video: 0/10 (chưa có)**
- Đây là phần thiếu lớn nhất

**Tổng kết:** Project đã implement **rất tốt** phần code. Chỉ thiếu Report.pdf và Video demo - 2 phần bắt buộc theo đề bài. Cần hoàn thiện ngay 2 phần này.

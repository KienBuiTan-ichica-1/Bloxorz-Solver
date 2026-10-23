# Bloxorz Solver — CSC14003 Project 1

> Đồ án môn **Nhập môn Trí tuệ Nhân tạo (CSC14003)** — Cài đặt game **Bloxorz** kèm bộ giải bằng các thuật toán tìm kiếm **BFS, DFS, IDS, UCS, A\***, giao diện **3D thật bằng PyOpenGL** và bộ thực nghiệm đo hiệu năng.

Bloxorz là trò chơi xếp hình: điều khiển khối hộp **1 × 1 × 2** lăn trên bàn cờ để rơi đứng vào ô đích. Điểm thú vị của bài toán là **hướng của khối** (đứng / nằm ngang / nằm dọc) là một phần của trạng thái, cùng với trạng thái các cây cầu — biến nó thành một bài toán tìm kiếm lý tưởng để phân tích các thuật toán có/không có thông tin.

---

## Tính năng

- **Gameplay đầy đủ**: bàn cờ dạng lưới, ô trống, ô đích, khối 3 hướng, 4 phép lăn, phát hiện nước đi sai và điều kiện thắng.
- **Tile nâng cao**:
  - Ô **fragile** — chỉ chịu được khối khi nằm (không chịu được khi đứng).
  - **Cầu (bridge)** đóng/mở, điều khiển bởi công tắc.
  - Ba loại công tắc: **soft** (kích hoạt mọi hướng), **heavy** (chỉ khi khối đứng), **split** (tách khối thành hai khối 1×1×1, điều khiển luân phiên và ghép lại).
  - Hai kiểu tác động cầu: **toggle** và **permanent**.
- **GUI 3D (PyOpenGL)**: bàn cờ, khối hộp và hai khối đơn vị được render 3D thật với ánh sáng, bóng đổ và animation lăn; camera xoay/zoom tự do. Chơi thủ công, chọn stage, undo, restart, chạy solver trong **thread riêng** (nút Stop hủy được) và **phát lại lời giải** kèm thanh tiến độ.
- **5 solver** tự cài đặt, không dùng thư viện tìm kiếm: BFS, DFS, IDS, UCS, A\*.
- **Đo hiệu năng**: thời gian tìm kiếm, bộ nhớ đỉnh, số node mở rộng, độ dài lời giải, chi phí đường đi, frontier lớn nhất.
- **CLI** chạy solver không cần GUI + **bộ thực nghiệm** sinh CSV và biểu đồ cho báo cáo.
- **166 unit test** (pytest) cho luật chơi, tile nâng cao, tính tối ưu và tính admissible/consistent của heuristic.

---

## Giao diện 3D

Bàn cờ và khối được render bằng OpenGL (fixed-function, không shader) trong cửa sổ pygame: ánh sáng định hướng 2 nguồn, depth buffer, MSAA 4× nếu driver hỗ trợ.

![Bàn cờ 3D — Level 9](Source/screenshots/board_3d.png)

- **Ô đích** là một hố lõm có viền xanh; **fragile** có gạch chéo; **cầu đóng** chìm xuống dưới mặt sàn; **3 loại switch** vẽ dạng đĩa / dấu X / ngoặc.
- **Animation lăn thật**: khối xoay 90° quanh cạnh tiếp xúc (easing 0.15 s); khi solver phát lại, mỗi bước chờ animation xong mới đi tiếp; khối rơi đứng vào đích thì chìm xuống hố.
- **Camera quỹ đạo**: kéo chuột để xoay, lăn chuột để zoom, `T` nhìn từ trên, `F` reset.
- **UI overlay**: panel/nút/legend/text được vẽ ở một lượt ortho phía trên scene; chuỗi ký tự được cache thành texture OpenGL.

![Animation lăn giữa chừng](Source/screenshots/rolling_3d.png)

![Tile nâng cao: fragile + bridge + soft switch — Level 7](Source/screenshots/switches_3d.png)

---

## Cấu trúc dự án

```
Project1/
├── README.md                 ← tài liệu tổng quan (file này)
├── AI_Project_1.md           ← đề bài
└── Source/
    ├── main.py               ← entry point (GUI + CLI)
    ├── gui_gl.py             ← giao diện 3D PyOpenGL
    ├── requirements.txt
    ├── README.md             ← mô tả chi tiết model & định dạng stage
    ├── BUILD_AND_RUN.md      ← hướng dẫn cài đặt / chạy / đóng gói (tiếng Việt)
    ├── bloxorz/
    │   ├── stage.py          ← đọc & validate stage (JSON/ASCII)
    │   ├── engine.py         ← trạng thái, transition model, luật chơi
    │   └── search.py         ← BFS / DFS / IDS / UCS / A* + metrics
    ├── stages/               ← 15 stage chia 4 nhóm độ khó
    ├── tests/                ← pytest suite
    ├── screenshots/          ← ảnh chụp giao diện 3D cho README
    └── experiments/
        ├── run_experiments.py
        ├── make_charts.py
        ├── results.csv
        └── charts/           ← biểu đồ PNG + summary.md
```

---

## Cài đặt & chạy

Yêu cầu: **Python 3.10+** (đã kiểm chứng trên 3.11, Windows) và driver có **OpenGL 2.0+**.

```bash
cd Source
python -m venv .venv
.\.venv\Scripts\Activate.ps1        # Windows PowerShell
# source .venv/bin/activate          # macOS / Linux

python -m pip install -r requirements.txt
```

### GUI (mặc định)

```bash
python main.py
```

| Phím / nút | Chức năng |
|---|---|
| Mũi tên / `W A S D` | Lăn khối |
| `X` | Đổi khối đang điều khiển (chế độ split) |
| `M` | Ghép hai khối phụ |
| `R` | Chơi lại stage |
| `Esc` | Thoát |
| Kéo chuột trái/phải | Xoay camera 3D |
| Lăn chuột / `+` `-` | Zoom |
| `Q` / `E` | Xoay camera |
| `PageUp` / `PageDown` | Góc nhìn |
| `T` | Nhìn từ trên xuống |
| `F` | Reset camera |
| Nút `BFS` `DFS` `IDS` `UCS` `A*` | Chạy solver và phát lại lời giải |

### Dòng lệnh

```bash
python main.py --list                       # danh sách 15 stage
python main.py --solve BFS                  # giải stage 1
python main.py --solve "A*" --stage 7 -v    # in chuỗi nước đi
python main.py --solve UCS --cost uniform   # chọn cost model
python main.py --all                        # mọi solver × mọi stage
```

---

## Mô hình bài toán

**Trạng thái** (`GameState`, hashable — dùng trực tiếp làm khóa tìm kiếm):

| Thành phần | Ý nghĩa |
|---|---|
| `mode` | `block` (1×1×2) hoặc `split` (hai khối đơn vị) |
| `orient` | `S` đứng, `H` nằm ngang, `V` nằm dọc |
| `pos` | ô neo của khối, hoặc cặp ô khi ở chế độ split |
| `active` | khối đang được điều khiển (split) |
| `bridges` | trạng thái **mọi** cây cầu (đóng / mở / khóa) |

**Hành động**: `U D L R` (lăn), `X` (đổi khối), `M` (ghép). Nước đi không hợp lệ trả về `None` (ra ngoài bàn, rơi hố, cầu đóng, đứng trên ô fragile). Cấu hình cầu là một phần của trạng thái nên hai vị trí giống nhau nhưng cầu khác nhau là hai trạng thái khác nhau — đúng yêu cầu đề bài. Chỉ các ô **mới được đi vào** mới kích hoạt công tắc: khối đứng yên trên soft switch không bị kích hoạt lại khi khối còn lại di chuyển, và thao tác ghép `M` không kích hoạt công tắc.

**Cost model** (`bloxorz/search.py`):

| Tình huống | Chi phí |
|---|---|
| `X` (không di chuyển) | 1 |
| Hành động kích hoạt công tắc | 1 |
| Lăn / ghép thông thường | 2 |
| Đáp xuống ô fragile | +1 |

- `BFS / DFS / IDS` dùng cost `uniform` (mỗi nước = 1) và tối ưu theo số nước đi.
- `UCS / A*` mặc định dùng cost `risk` để UCS không chỉ là BFS đổi tên.
- Mọi chi phí đều **≥ 1** — điều kiện giữ cho heuristic admissible với cả hai cost model.

**Heuristic**: khoảng cách tới đích trên lưới "nới lỏng" (bỏ qua cầu/fragile/công tắc). Cạnh đi trên lưới có chi phí 1; teleport của split switch là cạnh **chi phí 0** từ ô công tắc tới từng đích teleport, nên khoảng cách được tính bằng **0-1 BFS** (duyệt ngược từ đích). Sau đó lấy `min` trên các ô khối đang chiếm rồi chia 2 (làm tròn lên): `h(s) = min_c ceil(D(c, goal) / 2)`. Vì một nước lăn có thể đưa ô gần đích nhất tới 2 ô, và teleport không tạo thêm nước đi (D(nguồn) = min D(đích)), `h` vẫn admissible và consistent với mọi cost ≥ 1; A\* mở rộng ít node hơn BFS/UCS trên hầu hết stage.

---

## Định dạng stage

```json
{
  "name": "Level 4 - Soft Switch",
  "group": "C - Switches",
  "map": ["............", "#S###s###0G#", "............"],
  "start": [1, 1],
  "bridges": ["closed"],
  "switches": [
    {"kind": "soft", "mode": "toggle", "cells": [[1, 5]], "bridges": [0]}
  ]
}
```

Ký hiệu: `#` sàn, `.`/space hố, `G` đích, `F` fragile, `0-9` cầu, `s` soft switch, `x` heavy switch, `t` split switch, `S` điểm bắt đầu.

Loader kiểm tra `set` chỉ nhận `open|closed`, bridge index phải tồn tại, start không được nằm trên fragile/cầu đóng, và teleport của split switch không được trùng nhau hoặc trỏ vào ô void/fragile/cầu đóng mặc định.

---

## Kiểm thử

```bash
cd Source
python -m pytest tests/ -q          # kỳ vọng: 166 passed
```

Bộ test bao phủ: bảng chuyển hướng, tile nâng cao, replay mọi solver trên mọi stage, tối ưu BFS vs IDS, admissible/consistency của heuristic (kể cả teleport), cost model, validate stage, soft switch không kích hoạt lại, permanent bridge, timeout/hủy DFS-IDS và chế độ đo hai lượt.

---

## Thực nghiệm

```bash
cd Source
python experiments/run_experiments.py          # -> experiments/results.csv
python experiments/run_experiments.py --runs 5 # lấy trung vị thời gian
python experiments/run_experiments.py --timeout 5  # giới hạn DFS/IDS (giây)
python experiments/make_charts.py              # -> charts/*.png + summary.md
```

Mỗi combo chạy hai lượt: lượt đo thời gian **không bật** `tracemalloc`, lượt đo bộ nhớ bật `tracemalloc`. Nếu DFS/IDS vượt `--timeout` (mặc định 10 s), CSV ghi `timed_out=True`. Với IDS, `max_frontier` là kích thước bảng transposition (số trạng thái đã gặp), không phải frontier BFS thực sự.

### Kết quả trung bình trên 15 stage

| Thuật toán | Độ dài TB | Node mở rộng TB | Thời gian TB (ms) | Bộ nhớ TB (KiB) |
|---|---:|---:|---:|---:|
| BFS | 10.3 | 106.1 | 1.81 | 20.9 |
| DFS | 38.1 | 73.3 | 1.26 | 24.4 |
| IDS | 10.3 | 1408.6 | 22.99 | 21.4 |
| UCS | 10.3 | 105.7 | 3.08 | 30.1 |
| A\* | 10.3 | 80.0 | 2.73 | 30.4 |

**Nhận xét nhanh**

- **A\*** mở rộng ít node nhất trong các thuật toán tối ưu, nhờ heuristic admissible.
- **BFS** tối ưu số nước đi nhưng tốn bộ nhớ frontier; **DFS** có thể cho lời giải rất dài (105 nước ở Level 9, 198 nước ở Level 13).
- **IDS** tối ưu như BFS nhưng mở rộng nhiều node hơn do lặp lại theo độ sâu; trên maze 15×15 IDS mở rộng ~14.6k node.
- **UCS** với cost `risk` tìm lời giải tối ưu theo chi phí, không nhất thiết ngắn nhất theo số nước. Level 11 chứng minh điều này: BFS đi 9 nước nhưng phải băng qua fragile (risk 21), UCS đi 10 nước đường an toàn (risk 20).

Chi tiết từng stage và biểu đồ: [`Source/experiments/charts/summary.md`](Source/experiments/charts/summary.md).

---

## Tài liệu

- [`Source/README.md`](Source/README.md) — mô tả model, heuristic, cost function, định dạng stage.
- [`Source/BUILD_AND_RUN.md`](Source/BUILD_AND_RUN.md) — cài đặt, chạy, test, đóng gói bài nộp.
- [`AI_Project_1.md`](AI_Project_1.md) — đề bài gốc.

## Công nghệ

Python 3.11 · pygame · PyOpenGL · matplotlib · pytest

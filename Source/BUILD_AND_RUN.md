# Hướng dẫn Build & Run — Bloxorz Solver (CSC14003 Project 1)

Tài liệu này mô tả cách cài đặt, chạy, kiểm thử và đóng gói dự án từ đầu đến cuối.
Giới thiệu về code/model/định dạng stage nằm trong [README.md](README.md).

Mọi lệnh dưới đây được viết cho **thư mục `Source/`** (nơi chứa `main.py`).

---

## 1. Yêu cầu hệ thống

| Hạng mục | Yêu cầu | Đã kiểm chứng trên |
|---|---|---|
| Hệ điều hành | Windows 10/11, macOS hoặc Linux | Windows 10/11 |
| Python | **3.10 trở lên** | Python 3.11.9 |
| RAM / ổ đĩa | ~200 MB RAM trống, ~100 MB ổ đĩa | — |
| Màn hình (GUI) | cửa sổ 1180×780, bàn cờ tự thu nhỏ nếu to hơn | — |
| GPU / Internet | không cần (Internet chỉ cần khi `pip install`) | — |

> ⚠️ **Lưu ý trình thông dịch:** trên Windows có thể tồn tại hai lệnh Python
> khác nhau. Trên máy dựng dự án: `python` = **3.11.9** (đã cài pygame),
> còn `py` (launcher) = **3.14.3** (chưa cài thư viện).
> Hãy luôn kiểm tra trước khi chạy:
>
> ```powershell
> python --version     # nên là 3.10+
> python -c "import sys; print(sys.executable)"
> ```
>
> Nếu phải dùng `py`, hãy cài luôn requirements cho phiên bản đó:
> `py -m pip install -r requirements.txt`.

---

## 2. Cài đặt (build)

Python là ngôn ngữ thông dịch nên **không có bước biên dịch**. "Build" ở đây là:
tạo môi trường ảo → cài thư viện → kiểm tra chương trình chạy được.

### 2.1. Mở terminal và vào thư mục dự án

```powershell
cd D:\csttnt\Project1\Source      # Windows (PowerShell / cmd)
cd /d/.../Project1/Source         # macOS / Linux (bash)
```

### 2.2. Tạo môi trường ảo (khuyến nghị, có thể bỏ qua)

```powershell
python -m venv .venv
```

Kích hoạt:

```powershell
# Windows PowerShell
.\.venv\Scripts\Activate.ps1
# nếu PowerShell chặn: Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned

# Windows cmd
.venv\Scripts\activate.bat

# macOS / Linux
source .venv/bin/activate
```

Khi môi trường ảo đang bật, dòng lệnh sẽ hiển thị tiền tố `(.venv)`.

### 2.3. Cài thư viện

```powershell
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

Nội dung `requirements.txt`:

| Gói | Phiên bản | Dùng để |
|---|---|---|
| `pygame` | >= 2.5 | giao diện GUI |
| `matplotlib` | >= 3.7 | vẽ biểu đồ experiments |
| `pytest` | >= 7.0 | chạy bộ test |

Gói kiểm tra chất lượng mã (tuỳ chọn, **không** nằm trong requirements):

```powershell
python -m pip install ruff
```

### 2.4. Kiểm tra cài đặt

```powershell
python -c "import pygame, matplotlib, pytest; print('pygame', pygame.version.ver)"
python main.py --list          # liệt kê 10 stage
python -m pytest tests/ -q     # kỳ vọng: 98 passed
```

Nếu cả ba lệnh trên chạy được thì môi trường đã sẵn sàng.

---

## 3. Chạy chương trình

### 3.1. Giao diện đồ hoạ (GUI) — mặc định

```powershell
python main.py
# hoặc rõ ràng
python main.py --gui
```

Bảng điều khiển:

| Phím / nút | Chức năng |
|---|---|
| Mũi tên / `W A S D` | lăn khối |
| `X` | đổi khối đang điều khiển (chế độ split) |
| `M` | ghép hai khối phụ thành khối 1×1×2 |
| `R` | chơi lại stage hiện tại |
| `Esc` | thoát |
| `New Game` | về stage số 1 |
| `Restart` | chơi lại stage hiện tại |
| `<` `>` | chuyển stage trước / kế |
| `Undo` | hoàn nước đi cuối |
| `Stop` | dừng việc phát lại lời giải |
| `BFS` `DFS` `IDS` `UCS` `A*` | chạy solver và phát lại lời giải (có thanh tiến độ) |

Panel bên phải hiển thị trạng thái hiện tại (vị trí, hướng, cầu, lượt đi) và,
sau khi chạy solver: độ dài lời giải, tổng chi phí, số node đã mở rộng, thời gian
tìm, bộ nhớ đỉnh, kích thước frontier lớn nhất.

### 3.2. Chạy từ dòng lệnh (không mở GUI)

```powershell
python main.py --list                                   # danh sách stage
python main.py --solve BFS                              # stage 1
python main.py --solve A* --stage 7 -v                  # stage 7 + in lời giải
python main.py --solve UCS --cost uniform -v            # chọn cost model
python main.py --all                                    # mọi solver × mọi stage
```

| Cờ | Ý nghĩa |
|---|---|
| `--list` | in danh sách stage kèm mô tả |
| `--solve {BFS,DFS,IDS,UCS,A*}` | chạy một solver trên một stage |
| `--stage N` | chọn stage (mặc định 1) |
| `--cost {uniform,risk}` | cost model cho **UCS/A\*** (mặc định `risk`) |
| `--verbose` / `-v` | in chuỗi nước đi (Up, Down, Left, Right, …) |
| `--all` | chạy toàn bộ 5 solver trên 10 stage |

> `BFS/DFS/IDS` luôn tối ưu theo **số nước đi** nên luôn dùng cost model
> `uniform`; cờ `--cost` chỉ có ý nghĩa với `UCS/A*`.

*Trong bash/zsh hãy đặt `A*` trong ngoặc kép:* `python main.py --solve "A*" --stage 7`

### 3.3. Chạy test

```powershell
python -m pytest tests/ -q
python -m pytest tests/test_cost_models.py -v    # chỉ phần cost model
```

98 test phủ: bảng chuyển hướng, các tile nâng cấp (fragile/bridge/3 loại switch),
mọi solver replay tới goal trên mọi stage, tính tối ưu BFS vs IDS, tính
admissible/consistency của heuristic, mọi chi phí ≥ 1, UCS và A\* đồng thuận
trên cùng tổng chi phí, và validate định dạng stage.

### 3.4. Chạy experiments (dữ liệu + biểu đồ cho báo cáo)

```powershell
python experiments/run_experiments.py             # -> experiments/results.csv
python experiments/run_experiments.py --runs 5    # lặp lại 5 lần (lấy trung vị thời gian)
python experiments/run_experiments.py --skip-ids  # bỏ IDS khỏi lần chạy
python experiments/make_charts.py                 # -> experiments/charts/*.png + summary.md
```

Đầu ra:

* `experiments/results.csv` — 10 stage × 5 solver: thời gian (trung vị của
  `--runs` lần chạy), bộ nhớ đỉnh (`tracemalloc`), số node mở rộng, độ dài lời
  giải, tổng chi phí, frontier lớn nhất.
* `experiments/charts/` — 4 biểu đồ PNG (`expanded_nodes`, `search_time_s`,
  `peak_memory_bytes`, `solution_length`) + `summary.md` (bảng chi tiết và bảng
  trung bình).

Chạy từ **thư mục `Source/`** (hai script tự nạp thư mục `bloxorz` nên không
cần `cd` thêm, nhưng phải chạy đúng lệnh trên).

### 3.5. Kiểm tra lint (tuỳ chọn)

```powershell
python -m ruff check .
```

Kỳ vọng: `All checks passed!`

---

## 4. Đóng gói nộp bài (build `.zip`)

Theo đề bài, bài nộp phải có cấu trúc:

```
StudentID1_StudentID2_...
├── Source
│   ├── main.py
│   ├── README.md
│   ├── requirements.txt
│   └── ...
└── Report.pdf
```

và tên file `.zip/.rar` đúng định dạng `StudentID1_StudentID2_...`, dung lượng
**dưới 20 MB**.

### 4.1. Windows (PowerShell) — đã kiểm chứng

Chạy **từ thư mục dự án** (thư mục cha của `Source/`):

```powershell
$zip  = ".\StudentID1_StudentID2.zip"
$dst  = ".\StudentID1_StudentID2"

# 1) sao chép mã nguồn, loại bỏ cache và môi trường ảo
robocopy ".\Source" $dst /E /XD __pycache__ .pytest_cache .ruff_cache .venv /NFL /NDL /NJH /NJS
if ($LASTEXITCODE -ge 8) { throw "robocopy lỗi: $LASTEXITCODE" }

# 2) nén
Compress-Archive -Path $dst -DestinationPath $zip -Force

# 3) dọn thư mục tạm
Remove-Item $dst -Recurse -Force

# 4) kiểm tra
Get-Item $zip | Select-Object Name, @{n='MB';e={[math]::Round($_.Length/1MB,2)}}
```

Kết quả đã đo: **~0,4 MB / 33 file**, không có `__pycache__`.

### 4.2. macOS / Linux

```bash
rsync -a --exclude '__pycache__' --exclude '.pytest_cache' \
        --exclude '.ruff_cache' --exclude '.venv' \
        Source StudentID1_StudentID2
zip -r StudentID1_StudentID2.zip StudentID1_StudentID2
rm -rf StudentID1_StudentID2
```

### 4.3. Checklist trước khi nộp

- [ ] `python -m pytest tests/ -q` → 98 passed
- [ ] `python main.py --list` chạy được từ **bản zip mới giải nén**
- [ ] `python main.py` mở được GUI và chạy solver
- [ ] Chạy được experiments trên bản zip mới:
      `python experiments/run_experiments.py` rồi `python experiments/make_charts.py`
      (nếu nộp kèm số liệu)
- [ ] Có `Report.pdf` ở thư mục gốc cạnh `Source/`, link video YouTube trong báo cáo
- [ ] Dung lượng < 20 MB, tên file đúng định dạng `StudentID1_StudentID2_...`
- [ ] Không còn thay đổi sau khi nộp (đề bài cấm sửa sau deadline)

---

## 5. Xử lý sự cố

| Triệu chứng | Nguyên nhân | Cách xử lý |
|---|---|---|
| `ModuleNotFoundError: No module named 'pygame'` | chưa cài requirements, hoặc chạy nhầm bản Python 3.14 của `py` | `python -m pip install -r requirements.txt`; kiểm tra `python -c "import sys; print(sys.executable)"` |
| `ModuleNotFoundError: No module named 'bloxorz'` | chạy sai thư mục | `cd` vào `Source/` rồi chạy lại |
| `python: command not found` | Python chưa có trong PATH | dùng `py -3.11 main.py` (chỉ định đúng phiên bản) hoặc thêm Python vào PATH |
| PowerShell từ chối `Activate.ps1` | chính sách thực thi | `Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned` |
| `pip` tải chậm / lỗi mạng | mạng tới PyPI | kiểm tra kết nối rồi chạy lại `python -m pip install -r requirements.txt`, hoặc thử mạng khác / `pip install --retries 5` |
| Không thấy cửa sổ GUI (máy ảo, CI, server) | không có màn hình | dùng biến môi trường `SDL_VIDEODRIVER=dummy` (chỉ để kiểm tra, không thấy hình):<br>PowerShell: `$env:SDL_VIDEODRIVER="dummy"; python main.py`<br>bash: `SDL_VIDEODRIVER=dummy python main.py` |
| Chữ tiếng Việt hiện thành `?` | code page console | Windows: `chcp 65001` trước khi chạy; file mã hoá UTF-8 nên nội dung không hỏng |
| Solver chạy hơi "đơ" vài chục ms | đo thời gian có độ nhiễu | dùng `python experiments/run_experiments.py --runs 5` để lấy trung vị |
| `IDS` hoặc `DFS` cho lời giải dài hơn BFS | DFS không tối ưu; IDS thì có (đã có transposition table) | dùng `BFS`/`IDS`/`UCS`/`A*` khi cần lời giải ngắn |
| Biểu đồ trống / `results.csv is empty` | chưa chạy experiments | `python experiments/run_experiments.py` trước `python experiments/make_charts.py` |
| `ruff: command not found` | chưa cài ruff (tuỳ chọn) | `python -m pip install ruff` |

---

## 6. Bảng lệnh nhanh

```powershell
# --- cài đặt (1 lần) ---
cd D:\csttnt\Project1\Source
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt

# --- chạy ---
python main.py                      # GUI
python main.py --solve "A*" --stage 7 -v
python main.py --all

# --- kiểm thử ---
python -m pytest tests/ -q
python -m ruff check .

# --- experiments cho báo cáo ---
python experiments/run_experiments.py
python experiments/make_charts.py
```

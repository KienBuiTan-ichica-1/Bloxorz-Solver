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
- **GUI 3D (PyOpenGL)**: bàn cờ, khối hộp và hai khối đơn vị được render 3D thật với ánh sáng, bóng đổ và animation lăn; camera xoay/zoom tự do. Chơi thủ công, chọn stage, undo, restart, chạy solver và **phát lại lời giải** kèm thanh tiến độ.
- **5 solver** tự cài đặt, không dùng thư viện tìm kiếm: BFS, DFS, IDS, UCS, A\*.
- **Đo hiệu năng**: thời gian tìm kiếm, bộ nhớ đỉnh, số node mở rộng, độ dài lời giải, chi phí đường đi, frontier lớn nhất.
- **CLI** chạy solver không cần GUI + **bộ thực nghiệm** sinh CSV và biểu đồ cho báo cáo.
- **98 unit test** (pytest) cho luật chơi, tile nâng cao, tính tối ưu và tính admissible/consistent của heuristic.

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
    ├── stages/               ← 10 stage chia 4 nhóm độ khó
    ├── tests/                ← pytest suite
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
python main.py --list                       # danh sách 10 stage
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

**Hành động**: `U D L R` (lăn), `X` (đổi khối), `M` (ghép). Nước đi không hợp lệ trả về `None` (ra ngoài bàn, rơi hố, cầu đóng, đứng trên ô fragile). Cấu hình cầu là một phần của trạng thái nên hai vị trí giống nhau nhưng cầu khác nhau là hai trạng thái khác nhau — đúng yêu cầu đề bài.

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

**Heuristic**: khoảng cách đường đi ngắn nhất 4-liên thông tới đích trên lưới "nới lỏng" (bỏ qua cầu/fragile/công tắc), lấy `min` trên các ô khối đang chiếm. Admissible và consistent; A\* mở rộng ít node hơn BFS/UCS trên hầu hết stage.

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

---

## Kiểm thử

```bash
cd Source
python -m pytest tests/ -q          # kỳ vọng: 98 passed
```

Bộ test bao phủ: bảng chuyển hướng, tile nâng cao, replay mọi solver trên mọi stage, tối ưu BFS vs IDS, admissible/consistency của heuristic, cost model, và validate stage.

---

## Thực nghiệm

```bash
cd Source
python experiments/run_experiments.py          # -> experiments/results.csv
python experiments/run_experiments.py --runs 5 # lấy trung vị thời gian
python experiments/make_charts.py              # -> charts/*.png + summary.md
```

### Kết quả trung bình trên 10 stage

| Thuật toán | Độ dài TB | Node mở rộng TB | Thời gian TB (ms) | Bộ nhớ TB (KiB) |
|---|---:|---:|---:|---:|
| BFS | 9.0 | 61.4 | 3.64 | 15.5 |
| DFS | 21.5 | 52.9 | 3.41 | 17.8 |
| IDS | 9.0 | 505.3 | 33.09 | 13.4 |
| UCS | 9.0 | 61.1 | 5.60 | 19.0 |
| A\* | 9.0 | 44.2 | 4.26 | 19.3 |

**Nhận xét nhanh**

- **A\*** mở rộng ít node nhất trong các thuật toán tối ưu, nhờ heuristic admissible.
- **BFS** tối ưu số nước đi nhưng tốn bộ nhớ frontier; **DFS** có thể cho lời giải rất dài (ví dụ 83 nước ở Level 9).
- **IDS** tối ưu như BFS nhưng mở rộng nhiều node hơn do lặp lại theo độ sâu.
- **UCS** với cost `risk` tìm lời giải tối ưu theo chi phí, không nhất thiết ngắn nhất theo số nước.

Chi tiết từng stage và biểu đồ: [`Source/experiments/charts/summary.md`](Source/experiments/charts/summary.md).

---

## Tài liệu

- [`Source/README.md`](Source/README.md) — mô tả model, heuristic, cost function, định dạng stage.
- [`Source/BUILD_AND_RUN.md`](Source/BUILD_AND_RUN.md) — cài đặt, chạy, test, đóng gói bài nộp.
- [`AI_Project_1.md`](AI_Project_1.md) — đề bài gốc.

## Công nghệ

Python 3.11 · pygame · PyOpenGL · matplotlib · pytest

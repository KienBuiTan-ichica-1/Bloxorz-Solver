# Bloxorz 3D Solver (CSC14003 - Project 1)

Game Bloxorz có giao diện 3D chạy trên trình duyệt (Three.js + React + TypeScript) và bốn bộ giải
BFS, DFS, UCS, A* viết tay bằng Python (FastAPI). Chỉ thuật toán tìm kiếm bắt buộc dùng Python;
frontend TypeScript chỉ dựng GUI và mô phỏng luật chơi, không cài đặt solver.

## Cách chạy

**Cách 1: chỉ cần Python** (frontend đã build sẵn trong `frontend/dist`)

```bash
pip install -r requirements.txt
python main.py            # mở http://127.0.0.1:8000
```

**Cách 2: chế độ phát triển** (cần Node 18+)

```bash
# terminal 1
pip install -r requirements.txt
uvicorn main:app --port 8000
# terminal 2
cd frontend
npm install
npm run dev               # mở http://localhost:5173
```

Build lại frontend: `cd frontend && npm run build`.
Game chơi tay không cần backend; backend chỉ cần cho nút Solve và tab Thực nghiệm.

## Điều khiển

| Phím | Tác dụng |
|---|---|
| Mũi tên hoặc WASD | Lăn khối |
| Space | Đổi khối đang điều khiển (khi đã tách) |
| Z / R | Hoàn tác / chơi lại |
| M | Bật/tắt nhạc nền |
| Chuột | Kéo để xoay, lăn để zoom |

Giao diện có các nút New Game, Restart, Solve BFS/DFS/UCS/A*, phát lại lời giải, và tab Thực nghiệm (4 biểu đồ, xuất CSV).

## Âm thanh

Toàn bộ âm thanh được tổng hợp bằng Web Audio (`frontend/src/audio.ts`), không cần file nhạc.
Nhạc nền tự sinh (vòng hợp âm Am - F - C - G, có pad, bass, arpeggio và echo).
Mỗi nước đi có tiếng lăn, tiếng chạm sàn kèm một nốt thang ngũ cung nên các nước đi nghe như giai điệu;
ngoài ra có tiếng riêng cho gạch dễ vỡ, từng loại công tắc, cầu mở/đóng, tách/ghép khối, rơi, bàn vỡ và thắng.
Trình duyệt chỉ cho phát sau thao tác đầu tiên của người dùng (bấm hoặc gõ phím).
Bật/tắt và chỉnh âm lượng ở mục Âm thanh bên trái; cài đặt được lưu trong trình duyệt.

## Giao diện và hiệu ứng

Bàn chơi dùng màu trắng, ô đích màu đỏ hồng phát sáng. Khi khối rơi xuống — lăn ra ngoài, xuống cầu đang đóng
hoặc đứng trên gạch dễ vỡ — toàn bộ bàn vỡ vụn thành từng mảnh, sau đó các mảnh ghép lại và màn chơi tự khởi động lại.
Sáu màn L16–L21 thuộc nhóm **Thử thách**, dài và nhiều cơ chế hơn 15 màn gốc.

## Cấu trúc

```
Source/
  main.py              API FastAPI (+ phục vụ frontend/dist)
  bloxorz/game.py      luật chơi, trạng thái, chuyển trạng thái
  bloxorz/solvers.py   BFS, DFS, UCS, A*, heuristic, đo hiệu năng
  levels/*.json        21 màn, chia 6 nhóm độ khó
  benchmark.py         chạy thực nghiệm -> results/benchmark.csv
  tests/               unit test (python -m unittest discover -s tests)
  frontend/            React + Three.js (src/engine.ts phản ánh game.py)
```

## Định dạng màn chơi (JSON)

Ký hiệu lưới: `.` ô trống, `#` sàn, `S` xuất phát, `G` lỗ đích, `F` gạch dễ vỡ,
`B` gạch cầu, `o` công tắc mềm, `x` công tắc nặng, `p` công tắc tách.
`bridges` khai báo từng ô cầu (`id`, `pos`, `open`); `switches` khai báo `targets`
(id cầu), `mode` (`toggle` | `open` | `close`) và với `p` thì thêm `split_to` (hai vị trí).
Có thể nạp file JSON riêng ngay trên giao diện.

## Mô hình bài toán (dùng cho báo cáo)

- **Trạng thái**: `(o, r, c, r2, c2, act, mask)`: tư thế (`S`, `H`, `V`, hoặc `P` khi đã tách), vị trí,
  khối đang điều khiển, và bitmask đóng/mở của từng ô cầu.
  Cùng vị trí nhưng khác cầu là hai trạng thái khác nhau.
- **Hành động**: `U D L R` và `X` (đổi khối khi đã tách).
- **Chuyển trạng thái**: bảng (tư thế, hướng) -> (tư thế, vị trí) trong `roll()`; nước đi bất hợp lệ nếu có
  ô nằm ngoài lưới, ô trống, cầu đang đóng, hoặc đứng thẳng trên gạch dễ vỡ.
  Công tắc mềm kích hoạt khi bất kỳ phần nào của khối chạm vào; công tắc nặng và công tắc tách chỉ khi khối đứng thẳng.
  Hai khối nhỏ đứng sát nhau thì tự ghép lại.
- **Đích**: khối đứng thẳng trên ô `G`.
- **Hàm chi phí** (UCS, A*): mỗi nước = 1; thêm 2 nếu khối nằm lên gạch dễ vỡ (rủi ro cao); đổi khối `X` = 1.
  Khối nhỏ không bị phạt vì đủ nhẹ để đi trên gạch dễ vỡ. Nhờ phụ phí này UCS khác BFS ở màn L04, L09 và L19
  (BFS ít nước nhất, UCS chi phí thấp nhất).
- **Tránh lặp trạng thái**: tập `visited`/`parent` theo trạng thái ở cả bốn thuật toán.
- **DFS**: DFS đồ thị (không phải IDS), thứ tự mở rộng U, D, L, R, X; lời giải thường dài và không tối ưu.
- **Heuristic của A\***: khoảng cách trong bài toán nới lỏng (coi cầu và gạch dễ vỡ như sàn thường, bỏ công tắc),
  tính bằng một lần BFS ngược từ trạng thái đích.
  - *Admissible*: mọi nước đi thật đều hợp lệ trong bài toán nới lỏng, và mỗi nước có chi phí >= 1,
    nên h(n) <= chi phí thật còn lại.
  - Với màn có công tắc tách (đường thật có thể "dịch chuyển"): trạng thái đã tách có h = 2 (cần tối thiểu
    một nước ghép và một nước đứng lên lỗ đích); trạng thái khác dùng
    min(d_đích, d_công_tắc + 2), hoặc +1 nếu hai vị trí `split_to` cạnh nhau (teleport tự ghép ngay).
    Cả hai vế vẫn là cận dưới.
  - *Consistency*: không chứng minh được cho phần công tắc tách, nên A* cho phép mở lại nút khi tìm được g nhỏ hơn.
    Test xác nhận chi phí của A* bằng UCS trên cả 21 màn; kiểm tra fuzz thủ công thêm 300 màn ngẫu nhiên có đủ tile nâng cao.
- **Đo lường**: thời gian đo ở lần chạy không bật `tracemalloc`; bộ nhớ đỉnh đo ở lần chạy thứ hai bằng
  `tracemalloc`. Số nút mở rộng tính khi lấy nút ra khỏi hàng đợi (BFS kiểm tra đích khi sinh nút nên không tính nút đích).

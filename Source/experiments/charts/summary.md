# Experiment results

## Per stage and algorithm

| Stage | Algorithm | Sol. length | Path cost | Expanded | Time (ms) | Memory (KiB) | Max frontier | Status |
|---|---|---:|---:|---:|---:|---:|---:|---|
| Level 1 - Basic | BFS | 9 | 9.0 | 36 | 0.53 | 7.7 | 7 |  |
| Level 1 - Basic | DFS | 9 | 9.0 | 30 | 0.46 | 9.6 | 12 |  |
| Level 1 - Basic | IDS | 9 | 9.0 | 122 | 1.90 | 9.9 | 34 |  |
| Level 1 - Basic | UCS | 9 | 18.0 | 36 | 0.90 | 10.5 | 7 |  |
| Level 1 - Basic | A* | 9 | 18.0 | 35 | 0.95 | 11.4 | 8 |  |
| Level 2 - Vertical Move | BFS | 6 | 6.0 | 62 | 0.99 | 13.4 | 21 |  |
| Level 2 - Vertical Move | DFS | 21 | 21.0 | 24 | 0.41 | 10.1 | 16 |  |
| Level 2 - Vertical Move | IDS | 6 | 6.0 | 93 | 1.58 | 12.3 | 56 |  |
| Level 2 - Vertical Move | UCS | 6 | 12.0 | 62 | 1.69 | 16.9 | 21 |  |
| Level 2 - Vertical Move | A* | 6 | 12.0 | 55 | 1.64 | 18.3 | 18 |  |
| Level 3 - Fragile Tiles | BFS | 9 | 9.0 | 50 | 0.75 | 11.2 | 12 |  |
| Level 3 - Fragile Tiles | DFS | 26 | 26.0 | 42 | 0.65 | 13.3 | 11 |  |
| Level 3 - Fragile Tiles | IDS | 9 | 9.0 | 170 | 2.82 | 13.1 | 48 |  |
| Level 3 - Fragile Tiles | UCS | 9 | 22.0 | 50 | 1.33 | 15.3 | 12 |  |
| Level 3 - Fragile Tiles | A* | 9 | 22.0 | 49 | 1.39 | 16.7 | 12 |  |
| Level 4 - Soft Switch | BFS | 6 | 6.0 | 12 | 0.16 | 4.5 | 3 |  |
| Level 4 - Soft Switch | DFS | 6 | 6.0 | 12 | 0.17 | 4.3 | 3 |  |
| Level 4 - Soft Switch | IDS | 6 | 6.0 | 25 | 0.38 | 6.5 | 12 |  |
| Level 4 - Soft Switch | UCS | 6 | 11.0 | 12 | 0.26 | 5.0 | 3 |  |
| Level 4 - Soft Switch | A* | 6 | 11.0 | 9 | 0.22 | 4.8 | 3 |  |
| Level 5 - Split Switch | BFS | 4 | 4.0 | 11 | 0.16 | 4.3 | 7 |  |
| Level 5 - Split Switch | DFS | 4 | 4.0 | 70 | 1.02 | 15.8 | 21 |  |
| Level 5 - Split Switch | IDS | 4 | 4.0 | 12 | 0.20 | 5.3 | 11 |  |
| Level 5 - Split Switch | UCS | 4 | 7.0 | 11 | 0.24 | 5.1 | 7 |  |
| Level 5 - Split Switch | A* | 4 | 7.0 | 10 | 0.26 | 5.8 | 7 |  |
| Level 6 - Heavy Switch | BFS | 8 | 8.0 | 16 | 0.21 | 4.4 | 3 |  |
| Level 6 - Heavy Switch | DFS | 8 | 8.0 | 16 | 0.21 | 4.6 | 3 |  |
| Level 6 - Heavy Switch | IDS | 8 | 8.0 | 45 | 0.65 | 7.3 | 16 |  |
| Level 6 - Heavy Switch | UCS | 8 | 15.0 | 16 | 0.33 | 5.1 | 3 |  |
| Level 6 - Heavy Switch | A* | 8 | 15.0 | 12 | 0.29 | 5.6 | 3 |  |
| Level 7 - Fragile + Bridge | BFS | 10 | 10.0 | 20 | 0.28 | 5.0 | 3 |  |
| Level 7 - Fragile + Bridge | DFS | 10 | 10.0 | 20 | 0.29 | 6.9 | 3 |  |
| Level 7 - Fragile + Bridge | IDS | 10 | 10.0 | 79 | 1.20 | 8.8 | 20 |  |
| Level 7 - Fragile + Bridge | UCS | 10 | 20.0 | 20 | 0.45 | 7.2 | 3 |  |
| Level 7 - Fragile + Bridge | A* | 10 | 20.0 | 18 | 0.46 | 6.5 | 3 |  |
| Level 8 - Three Bridges | BFS | 10 | 10.0 | 28 | 0.42 | 7.4 | 4 |  |
| Level 8 - Three Bridges | DFS | 10 | 10.0 | 44 | 0.68 | 12.7 | 6 |  |
| Level 8 - Three Bridges | IDS | 10 | 10.0 | 104 | 1.65 | 10.2 | 28 |  |
| Level 8 - Three Bridges | UCS | 10 | 17.0 | 28 | 0.67 | 9.9 | 4 |  |
| Level 8 - Three Bridges | A* | 10 | 17.0 | 20 | 0.52 | 9.6 | 4 |  |
| Level 9 - Open Field | BFS | 7 | 7.0 | 249 | 4.48 | 50.2 | 81 |  |
| Level 9 - Open Field | DFS | 105 | 105.0 | 140 | 2.54 | 56.0 | 112 |  |
| Level 9 - Open Field | IDS | 7 | 7.0 | 585 | 11.74 | 39.4 | 235 |  |
| Level 9 - Open Field | UCS | 7 | 14.0 | 249 | 7.95 | 70.6 | 81 |  |
| Level 9 - Open Field | A* | 7 | 14.0 | 145 | 5.37 | 71.1 | 85 |  |
| Level 10 - Fragile + Heavy Switch | BFS | 14 | 14.0 | 22 | 0.28 | 6.2 | 3 |  |
| Level 10 - Fragile + Heavy Switch | DFS | 14 | 14.0 | 28 | 0.37 | 8.5 | 3 |  |
| Level 10 - Fragile + Heavy Switch | IDS | 14 | 14.0 | 114 | 1.58 | 11.1 | 22 |  |
| Level 10 - Fragile + Heavy Switch | UCS | 14 | 28.0 | 21 | 0.44 | 8.3 | 3 |  |
| Level 10 - Fragile + Heavy Switch | A* | 14 | 28.0 | 18 | 0.43 | 6.7 | 3 |  |
| Level 11 - Fragile Detour | BFS | 9 | 9.0 | 137 | 2.33 | 26.6 | 28 |  |
| Level 11 - Fragile Detour | DFS | 43 | 43.0 | 46 | 0.81 | 23.5 | 35 |  |
| Level 11 - Fragile Detour | IDS | 9 | 9.0 | 560 | 10.19 | 25.0 | 132 |  |
| Level 11 - Fragile Detour | UCS | 10 | 20.0 | 139 | 4.07 | 39.6 | 28 |  |
| Level 11 - Fragile Detour | A* | 10 | 20.0 | 135 | 4.23 | 42.4 | 39 |  |
| Level 12 - Permanent Bridge | BFS | 4 | 4.0 | 23 | 0.36 | 7.8 | 18 |  |
| Level 12 - Permanent Bridge | DFS | 28 | 28.0 | 59 | 0.92 | 15.8 | 18 |  |
| Level 12 - Permanent Bridge | IDS | 4 | 4.0 | 19 | 0.34 | 7.0 | 23 |  |
| Level 12 - Permanent Bridge | UCS | 4 | 7.0 | 17 | 0.45 | 8.0 | 14 |  |
| Level 12 - Permanent Bridge | A* | 4 | 7.0 | 8 | 0.26 | 6.6 | 10 |  |
| Level 13 - Big Open 15x15 | BFS | 10 | 10.0 | 642 | 12.02 | 109.7 | 160 |  |
| Level 13 - Big Open 15x15 | DFS | 198 | 198.0 | 419 | 7.98 | 142.3 | 272 |  |
| Level 13 - Big Open 15x15 | IDS | 10 | 10.0 | 4528 | 96.03 | 94.4 | 638 |  |
| Level 13 - Big Open 15x15 | UCS | 10 | 20.0 | 642 | 20.68 | 171.3 | 160 |  |
| Level 13 - Big Open 15x15 | A* | 10 | 20.0 | 408 | 14.71 | 167.8 | 145 |  |
| Level 14 - Branching Maze 15x15 | BFS | 38 | 38.0 | 259 | 3.51 | 48.4 | 26 |  |
| Level 14 - Branching Maze 15x15 | DFS | 79 | 79.0 | 120 | 1.76 | 34.3 | 29 |  |
| Level 14 - Branching Maze 15x15 | IDS | 38 | 38.0 | 14575 | 212.38 | 61.6 | 259 |  |
| Level 14 - Branching Maze 15x15 | UCS | 38 | 76.0 | 259 | 5.88 | 68.6 | 26 |  |
| Level 14 - Branching Maze 15x15 | A* | 38 | 76.0 | 257 | 9.39 | 72.8 | 25 |  |
| Level 15 - Combined Bridge + Fragile + Split | BFS | 10 | 10.0 | 24 | 0.61 | 6.8 | 3 |  |
| Level 15 - Combined Bridge + Fragile + Split | DFS | 10 | 10.0 | 29 | 0.66 | 8.9 | 4 |  |
| Level 15 - Combined Bridge + Fragile + Split | IDS | 10 | 10.0 | 98 | 2.22 | 9.7 | 24 |  |
| Level 15 - Combined Bridge + Fragile + Split | UCS | 10 | 18.0 | 24 | 0.90 | 9.4 | 3 |  |
| Level 15 - Combined Bridge + Fragile + Split | A* | 10 | 18.0 | 21 | 0.82 | 10.1 | 4 |  |

## Averages over all stages

| Algorithm | Avg. length | Avg. expanded | Avg. time (ms) | Avg. memory (KiB) |
|---|---:|---:|---:|---:|
| BFS | 10.3 | 106.1 | 1.81 | 20.9 |
| DFS | 38.1 | 73.3 | 1.26 | 24.4 |
| IDS | 10.3 | 1408.6 | 22.99 | 21.4 |
| UCS | 10.3 | 105.7 | 3.08 | 30.1 |
| A* | 10.3 | 80.0 | 2.73 | 30.4 |

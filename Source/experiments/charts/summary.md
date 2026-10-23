# Experiment results

## Per stage and algorithm

| Stage | Algorithm | Sol. length | Path cost | Expanded | Time (ms) | Memory (KiB) | Max frontier | Status |
|---|---|---:|---:|---:|---:|---:|---:|---|
| Level 1 - Basic | BFS | 9 | 9.0 | 36 | 0.49 | 7.7 | 7 |  |
| Level 1 - Basic | DFS | 9 | 9.0 | 30 | 0.70 | 9.6 | 12 |  |
| Level 1 - Basic | IDS | 9 | 9.0 | 122 | 1.78 | 9.9 | 34 |  |
| Level 1 - Basic | UCS | 9 | 18.0 | 36 | 0.89 | 10.5 | 7 |  |
| Level 1 - Basic | A* | 9 | 18.0 | 35 | 0.89 | 11.4 | 8 |  |
| Level 2 - Vertical Move | BFS | 6 | 6.0 | 62 | 0.93 | 13.4 | 21 |  |
| Level 2 - Vertical Move | DFS | 21 | 21.0 | 24 | 0.39 | 10.1 | 16 |  |
| Level 2 - Vertical Move | IDS | 6 | 6.0 | 93 | 1.53 | 12.3 | 56 |  |
| Level 2 - Vertical Move | UCS | 6 | 12.0 | 62 | 1.64 | 16.9 | 21 |  |
| Level 2 - Vertical Move | A* | 6 | 12.0 | 55 | 1.59 | 18.3 | 18 |  |
| Level 3 - Fragile Tiles | BFS | 9 | 9.0 | 50 | 0.72 | 11.2 | 12 |  |
| Level 3 - Fragile Tiles | DFS | 26 | 26.0 | 42 | 0.61 | 13.3 | 11 |  |
| Level 3 - Fragile Tiles | IDS | 9 | 9.0 | 170 | 2.74 | 13.1 | 48 |  |
| Level 3 - Fragile Tiles | UCS | 9 | 22.0 | 50 | 1.25 | 15.3 | 12 |  |
| Level 3 - Fragile Tiles | A* | 9 | 22.0 | 49 | 1.34 | 16.7 | 12 |  |
| Level 4 - Soft Switch | BFS | 6 | 6.0 | 12 | 0.15 | 4.5 | 3 |  |
| Level 4 - Soft Switch | DFS | 6 | 6.0 | 12 | 0.16 | 4.3 | 3 |  |
| Level 4 - Soft Switch | IDS | 6 | 6.0 | 25 | 0.39 | 6.5 | 12 |  |
| Level 4 - Soft Switch | UCS | 6 | 11.0 | 12 | 0.26 | 5.0 | 3 |  |
| Level 4 - Soft Switch | A* | 6 | 11.0 | 9 | 0.21 | 4.8 | 3 |  |
| Level 5 - Split Switch | BFS | 5 | 5.0 | 12 | 0.15 | 4.1 | 5 |  |
| Level 5 - Split Switch | DFS | 13 | 13.0 | 22 | 0.29 | 8.3 | 6 |  |
| Level 5 - Split Switch | IDS | 5 | 5.0 | 21 | 0.30 | 5.6 | 12 |  |
| Level 5 - Split Switch | UCS | 5 | 8.0 | 10 | 0.18 | 4.3 | 3 |  |
| Level 5 - Split Switch | A* | 5 | 8.0 | 10 | 0.20 | 5.1 | 3 |  |
| Level 6 - Heavy Switch | BFS | 8 | 8.0 | 16 | 0.19 | 4.4 | 3 |  |
| Level 6 - Heavy Switch | DFS | 8 | 8.0 | 16 | 0.21 | 4.6 | 3 |  |
| Level 6 - Heavy Switch | IDS | 8 | 8.0 | 45 | 0.60 | 7.3 | 16 |  |
| Level 6 - Heavy Switch | UCS | 8 | 15.0 | 16 | 0.32 | 5.1 | 3 |  |
| Level 6 - Heavy Switch | A* | 8 | 15.0 | 12 | 0.27 | 5.6 | 3 |  |
| Level 7 - Fragile + Bridge | BFS | 10 | 10.0 | 20 | 0.26 | 5.0 | 3 |  |
| Level 7 - Fragile + Bridge | DFS | 10 | 10.0 | 20 | 0.27 | 6.9 | 3 |  |
| Level 7 - Fragile + Bridge | IDS | 10 | 10.0 | 79 | 1.12 | 9.0 | 20 |  |
| Level 7 - Fragile + Bridge | UCS | 10 | 20.0 | 20 | 0.43 | 7.2 | 3 |  |
| Level 7 - Fragile + Bridge | A* | 10 | 20.0 | 18 | 0.43 | 6.5 | 3 |  |
| Level 8 - Three Bridges | BFS | 10 | 10.0 | 28 | 0.39 | 7.4 | 4 |  |
| Level 8 - Three Bridges | DFS | 10 | 10.0 | 44 | 0.76 | 12.7 | 6 |  |
| Level 8 - Three Bridges | IDS | 10 | 10.0 | 104 | 1.56 | 10.2 | 28 |  |
| Level 8 - Three Bridges | UCS | 10 | 17.0 | 28 | 0.66 | 9.9 | 4 |  |
| Level 8 - Three Bridges | A* | 10 | 17.0 | 20 | 0.53 | 9.6 | 4 |  |
| Level 9 - Open Field | BFS | 7 | 7.0 | 249 | 4.30 | 50.2 | 81 |  |
| Level 9 - Open Field | DFS | 105 | 105.0 | 140 | 2.42 | 56.0 | 112 |  |
| Level 9 - Open Field | IDS | 7 | 7.0 | 585 | 10.99 | 39.4 | 235 |  |
| Level 9 - Open Field | UCS | 7 | 14.0 | 249 | 7.43 | 70.6 | 81 |  |
| Level 9 - Open Field | A* | 7 | 14.0 | 145 | 4.93 | 71.1 | 85 |  |
| Level 10 - Fragile + Heavy Switch | BFS | 14 | 14.0 | 22 | 0.29 | 6.2 | 3 |  |
| Level 10 - Fragile + Heavy Switch | DFS | 14 | 14.0 | 28 | 0.37 | 8.5 | 3 |  |
| Level 10 - Fragile + Heavy Switch | IDS | 14 | 14.0 | 114 | 1.58 | 11.1 | 22 |  |
| Level 10 - Fragile + Heavy Switch | UCS | 14 | 28.0 | 21 | 0.45 | 8.3 | 3 |  |
| Level 10 - Fragile + Heavy Switch | A* | 14 | 28.0 | 18 | 0.42 | 6.7 | 3 |  |
| Level 11 - Fragile Detour | BFS | 9 | 9.0 | 137 | 2.22 | 26.6 | 28 |  |
| Level 11 - Fragile Detour | DFS | 43 | 43.0 | 46 | 0.81 | 23.5 | 35 |  |
| Level 11 - Fragile Detour | IDS | 9 | 9.0 | 560 | 11.04 | 25.0 | 132 |  |
| Level 11 - Fragile Detour | UCS | 10 | 20.0 | 139 | 4.12 | 39.6 | 28 |  |
| Level 11 - Fragile Detour | A* | 10 | 20.0 | 135 | 4.02 | 42.4 | 39 |  |
| Level 12 - Permanent Bridge | BFS | 4 | 4.0 | 23 | 0.36 | 7.8 | 18 |  |
| Level 12 - Permanent Bridge | DFS | 28 | 28.0 | 59 | 1.09 | 15.8 | 18 |  |
| Level 12 - Permanent Bridge | IDS | 4 | 4.0 | 19 | 0.33 | 7.0 | 23 |  |
| Level 12 - Permanent Bridge | UCS | 4 | 7.0 | 17 | 0.44 | 8.0 | 14 |  |
| Level 12 - Permanent Bridge | A* | 4 | 7.0 | 8 | 0.26 | 6.6 | 10 |  |
| Level 13 - Big Open 15x15 | BFS | 10 | 10.0 | 642 | 12.03 | 109.7 | 160 |  |
| Level 13 - Big Open 15x15 | DFS | 198 | 198.0 | 419 | 7.68 | 142.3 | 272 |  |
| Level 13 - Big Open 15x15 | IDS | 10 | 10.0 | 4528 | 92.07 | 94.4 | 638 |  |
| Level 13 - Big Open 15x15 | UCS | 10 | 20.0 | 642 | 20.76 | 171.3 | 160 |  |
| Level 13 - Big Open 15x15 | A* | 10 | 20.0 | 408 | 18.70 | 167.8 | 145 |  |
| Level 14 - Branching Maze 15x15 | BFS | 38 | 38.0 | 259 | 3.74 | 48.4 | 26 |  |
| Level 14 - Branching Maze 15x15 | DFS | 79 | 79.0 | 120 | 1.63 | 34.3 | 29 |  |
| Level 14 - Branching Maze 15x15 | IDS | 38 | 38.0 | 14575 | 204.28 | 61.6 | 259 |  |
| Level 14 - Branching Maze 15x15 | UCS | 38 | 76.0 | 259 | 5.63 | 68.6 | 26 |  |
| Level 14 - Branching Maze 15x15 | A* | 38 | 76.0 | 257 | 7.17 | 72.8 | 25 |  |
| Level 15 - Combined Bridge + Fragile + Split | BFS | 10 | 10.0 | 23 | 0.32 | 7.0 | 4 |  |
| Level 15 - Combined Bridge + Fragile + Split | DFS | 10 | 10.0 | 22 | 0.36 | 7.6 | 4 |  |
| Level 15 - Combined Bridge + Fragile + Split | IDS | 10 | 10.0 | 97 | 1.31 | 9.4 | 22 |  |
| Level 15 - Combined Bridge + Fragile + Split | UCS | 10 | 18.0 | 25 | 0.52 | 9.5 | 4 |  |
| Level 15 - Combined Bridge + Fragile + Split | A* | 10 | 18.0 | 22 | 0.50 | 10.2 | 5 |  |

## Averages over all stages

| Algorithm | Avg. length | Avg. expanded | Avg. time (ms) | Avg. memory (KiB) |
|---|---:|---:|---:|---:|
| BFS | 10.3 | 106.1 | 1.77 | 20.9 |
| DFS | 38.7 | 69.6 | 1.18 | 23.9 |
| IDS | 10.3 | 1409.1 | 22.11 | 21.4 |
| UCS | 10.4 | 105.7 | 3.00 | 30.0 |
| A* | 10.4 | 80.1 | 2.76 | 30.4 |

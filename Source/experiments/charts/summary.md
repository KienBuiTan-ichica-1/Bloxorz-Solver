# Experiment results

## Per stage and algorithm

| Stage | Algorithm | Sol. length | Path cost | Expanded | Time (ms) | Memory (KiB) | Max frontier |
|---|---|---:|---:|---:|---:|---:|---:|
| Level 1 - Basic | BFS | 2 | 2.0 | 18 | 1.19 | 11.7 | 13 |
| Level 1 - Basic | DFS | 2 | 2.0 | 37 | 1.94 | 11.0 | 12 |
| Level 1 - Basic | IDS | 2 | 2.0 | 6 | 0.47 | 3.8 | 18 |
| Level 1 - Basic | UCS | 2 | 4.0 | 18 | 1.32 | 8.4 | 13 |
| Level 1 - Basic | A* (goal) | 2 | 4.0 | 6 | 0.61 | 7.3 | 13 |
| Level 10 - Fragile + Heavy Switch | BFS | 10 | 10.0 | 32 | 1.33 | 7.6 | 7 |
| Level 10 - Fragile + Heavy Switch | DFS | 16 | 16.0 | 36 | 1.79 | 9.8 | 8 |
| Level 10 - Fragile + Heavy Switch | IDS | 10 | 10.0 | 162 | 6.95 | 9.8 | 32 |
| Level 10 - Fragile + Heavy Switch | UCS | 10 | 20.0 | 30 | 1.92 | 10.4 | 6 |
| Level 10 - Fragile + Heavy Switch | A* (goal) | 10 | 20.0 | 21 | 1.53 | 10.5 | 6 |
| Level 2 - Vertical Move | BFS | 4 | 4.0 | 45 | 2.31 | 12.5 | 19 |
| Level 2 - Vertical Move | DFS | 17 | 17.0 | 18 | 1.19 | 9.9 | 22 |
| Level 2 - Vertical Move | IDS | 4 | 4.0 | 45 | 3.19 | 7.6 | 39 |
| Level 2 - Vertical Move | UCS | 4 | 8.0 | 45 | 4.44 | 16.8 | 19 |
| Level 2 - Vertical Move | A* (goal) | 4 | 8.0 | 27 | 3.32 | 20.4 | 29 |
| Level 3 - Fragile Tiles | BFS | 8 | 8.0 | 49 | 3.91 | 11.2 | 11 |
| Level 3 - Fragile Tiles | DFS | 17 | 17.0 | 24 | 1.96 | 10.3 | 18 |
| Level 3 - Fragile Tiles | IDS | 8 | 8.0 | 315 | 18.58 | 11.4 | 48 |
| Level 3 - Fragile Tiles | UCS | 8 | 17.0 | 49 | 3.98 | 15.5 | 11 |
| Level 3 - Fragile Tiles | A* (goal) | 8 | 17.0 | 49 | 3.99 | 17.2 | 13 |
| Level 4 - Soft Switch | BFS | 10 | 10.0 | 37 | 1.88 | 10.0 | 8 |
| Level 4 - Soft Switch | DFS | 14 | 14.0 | 26 | 1.77 | 9.5 | 9 |
| Level 4 - Soft Switch | IDS | 10 | 10.0 | 198 | 11.07 | 10.5 | 37 |
| Level 4 - Soft Switch | UCS | 10 | 19.0 | 37 | 2.90 | 11.2 | 7 |
| Level 4 - Soft Switch | A* (goal) | 10 | 19.0 | 31 | 2.50 | 11.9 | 6 |
| Level 5 - Split Switch | BFS | 6 | 6.0 | 20 | 0.99 | 6.8 | 9 |
| Level 5 - Split Switch | DFS | 6 | 6.0 | 72 | 4.44 | 16.7 | 23 |
| Level 5 - Split Switch | IDS | 6 | 6.0 | 45 | 2.21 | 5.5 | 18 |
| Level 5 - Split Switch | UCS | 6 | 11.0 | 20 | 1.56 | 9.6 | 9 |
| Level 5 - Split Switch | A* (goal) | 6 | 11.0 | 18 | 1.45 | 8.6 | 9 |
| Level 6 - Heavy Switch | BFS | 8 | 8.0 | 30 | 1.26 | 7.3 | 7 |
| Level 6 - Heavy Switch | DFS | 12 | 12.0 | 26 | 1.39 | 8.8 | 8 |
| Level 6 - Heavy Switch | IDS | 8 | 8.0 | 110 | 4.97 | 8.6 | 30 |
| Level 6 - Heavy Switch | UCS | 8 | 15.0 | 29 | 1.89 | 10.1 | 7 |
| Level 6 - Heavy Switch | A* (goal) | 8 | 15.0 | 19 | 1.36 | 10.2 | 7 |
| Level 7 - Fragile + Bridge | BFS | 14 | 14.0 | 38 | 1.78 | 8.6 | 7 |
| Level 7 - Fragile + Bridge | DFS | 14 | 14.0 | 26 | 1.53 | 9.4 | 7 |
| Level 7 - Fragile + Bridge | IDS | 14 | 14.0 | 479 | 27.29 | 12.7 | 37 |
| Level 7 - Fragile + Bridge | UCS | 14 | 26.0 | 38 | 3.07 | 11.2 | 7 |
| Level 7 - Fragile + Bridge | A* (goal) | 14 | 26.0 | 38 | 3.02 | 12.2 | 6 |
| Level 8 - Three Bridges | BFS | 18 | 18.0 | 79 | 4.61 | 20.2 | 8 |
| Level 8 - Three Bridges | DFS | 34 | 34.0 | 106 | 7.04 | 35.2 | 20 |
| Level 8 - Three Bridges | IDS | 18 | 18.0 | 1026 | 64.23 | 20.5 | 78 |
| Level 8 - Three Bridges | UCS | 18 | 31.0 | 79 | 7.19 | 25.6 | 8 |
| Level 8 - Three Bridges | A* (goal) | 18 | 31.0 | 59 | 5.92 | 18.5 | 9 |
| Level 9 - Open Field | BFS | 10 | 10.0 | 266 | 17.12 | 58.8 | 51 |
| Level 9 - Open Field | DFS | 83 | 83.0 | 158 | 11.06 | 57.0 | 118 |
| Level 9 - Open Field | IDS | 10 | 10.0 | 2667 | 191.97 | 43.5 | 266 |
| Level 9 - Open Field | UCS | 10 | 20.0 | 266 | 27.71 | 71.1 | 51 |
| Level 9 - Open Field | A* (goal) | 10 | 20.0 | 174 | 18.85 | 76.2 | 61 |

## Averages over all stages

| Algorithm | Avg. length | Avg. expanded | Avg. time (ms) | Avg. memory (KiB) |
|---|---:|---:|---:|---:|
| BFS | 9.0 | 61.4 | 3.64 | 15.5 |
| DFS | 21.5 | 52.9 | 3.41 | 17.8 |
| IDS | 9.0 | 505.3 | 33.09 | 13.4 |
| UCS | 9.0 | 61.1 | 5.60 | 19.0 |
| A* (goal) | 9.0 | 44.2 | 4.26 | 19.3 |

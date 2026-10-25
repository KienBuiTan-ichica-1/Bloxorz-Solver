"""Backend FastAPI cho Bloxorz 3D. Chay: python main.py  (hoac uvicorn main:app --reload)."""
import threading
from pathlib import Path
from typing import List, Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from bloxorz import ALGORITHMS, Level, load_levels, solve

ROOT = Path(__file__).parent
LEVELS = load_levels(ROOT / "levels")
LOCK = threading.Lock()  # tracemalloc la toan cuc nen chi cho giai tuan tu

app = FastAPI(title="Bloxorz Solver API")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])


class SolveRequest(BaseModel):
    algorithm: str
    level_id: Optional[str] = None
    level: Optional[dict] = None  # man choi tuy chinh (cung dinh dang JSON)
    max_nodes: int = 2_000_000


class BenchmarkRequest(BaseModel):
    level_ids: Optional[List[str]] = None
    algorithms: Optional[List[str]] = None


def _check_algo(name: str) -> None:
    if name not in ALGORITHMS:
        raise HTTPException(400, f"Thuat toan khong hop le: {name}. Chon: {list(ALGORITHMS)}")


@app.get("/api/health")
def health():
    return {"ok": True, "algorithms": list(ALGORITHMS)}


@app.get("/api/levels")
def list_levels():
    return [lv.data for lv in LEVELS.values()]


@app.post("/api/solve")
def api_solve(req: SolveRequest):
    _check_algo(req.algorithm)
    if req.level is not None:
        try:
            level = Level(req.level)
        except (ValueError, KeyError, TypeError, IndexError, AttributeError) as e:
            raise HTTPException(422, f"Man choi khong hop le: {e}")
    elif req.level_id in LEVELS:
        level = LEVELS[req.level_id]
    else:
        raise HTTPException(404, "Khong tim thay man choi")
    with LOCK:
        return solve(level, req.algorithm, req.max_nodes)


@app.post("/api/benchmark")
def api_benchmark(req: BenchmarkRequest):
    ids = req.level_ids or list(LEVELS)
    algos = req.algorithms or list(ALGORITHMS)
    for a in algos:
        _check_algo(a)
    results = []
    with LOCK:
        for lid in ids:
            if lid not in LEVELS:
                raise HTTPException(404, f"Khong co man {lid}")
            for a in algos:
                r = solve(LEVELS[lid], a)
                r.pop("trace", None)
                results.append(r)
    return {"results": results}


DIST = ROOT / "frontend" / "dist"
if DIST.exists():  # neu da build frontend thi phuc vu luon tai http://localhost:8000
    app.mount("/", StaticFiles(directory=DIST, html=True), name="web")

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000)

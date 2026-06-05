# main.py (FastAPI)
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class MatchData(BaseModel):
    fuerza_local: float
    fuerza_visitante: float

@app.post("/compute")
def compute_prediction(data: MatchData):
    # Lógica de Regresión Logística
    prob_local = model.predict_proba([[data.fuerza_local, data.fuerza_visitante]])
    return {"probabilidad_local": prob_local}
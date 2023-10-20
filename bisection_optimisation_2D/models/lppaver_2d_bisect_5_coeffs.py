from fastapi import FastAPI
from joblib import load
import pandas as pd

p1 = 'P1'
p2 = 'P2'
p3 = 'P3'
p4 = 'P4'
p5 = 'P5'
input_cols = [p1,p2,p3,p4,p5]

loaded_pipe = load('lppaver_2d_bisect_5_coeffs.joblib')

app = FastAPI()

@app.get("/model")
def apply_model(q: str):
  coeffs = [int(s) for s in q.split(',')]
  result = loaded_pipe.predict(pd.DataFrame([coeffs], columns=input_cols))
  return result[0]
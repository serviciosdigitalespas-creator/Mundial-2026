import pandas as pd
from sqlalchemy import create_engine
from sklearn.linear_model import LogisticRegression

# 1. Conexión a la base de datos de PAS
engine = create_engine('postgresql://usuario:password@host:5432/database')

def obtener_datos_torneo():
    # Extraemos estadísticas de la tabla de posiciones calculada
    query = "SELECT equipo_id, pg, pe, pp, gf, gc FROM posiciones"
    return pd.read_sql(query, engine)

def calcular_probabilidades():
    df = obtener_datos_torneo()
    
    # 2. Entrenamiento del modelo (Regresión Logística)
    # Entrenamos con variables de goles y puntos (PTS)
    X = df[['pg', 'gf', 'gc']]
    y = df['resultado_historico'] # Variable objetivo
    
    modelo = LogisticRegression()
    modelo.fit(X, y)
    
    # 3. Predicción para el próximo partido
    probabilidades = modelo.predict_proba([[victorias, goles_a_favor, goles_en_contra]])
    return probabilidades
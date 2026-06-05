-- Estructura esencial
CREATE TABLE equipos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    grupo CHAR(1),
    ciudad VARCHAR(100),
    escudo_url VARCHAR(255)
);

CREATE TABLE partidos (
    id SERIAL PRIMARY KEY,
    equipo_local_id INT REFERENCES equipos(id),
    equipo_visitante_id INT REFERENCES equipos(id),
    goles_local INT DEFAULT 0,
    goles_visitante INT DEFAULT 0,
    fase VARCHAR(50), -- 'Grupos', 'Octavos', etc.
    jugado BOOLEAN DEFAULT FALSE
);
CREATE OR REPLACE FUNCTION actualizar_tabla_posiciones()
RETURNS TRIGGER AS $$
BEGIN
    -- Lógica de actualización automática:
    -- Si goles_local > goles_visitante -> PG al local, PP al visitante.
    -- Si empate -> PE a ambos.
    -- Incremento automático de GF (Goles a Favor) y GC (Goles en Contra).
    -- Recálculo de PTS y DG (Diferencia de Gol).
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_actualizar_posiciones
AFTER UPDATE ON partidos
FOR EACH ROW EXECUTE FUNCTION actualizar_tabla_posiciones();
// routes/ai.routes.js
router.post('/predict', async (req, res) => {
    const { partidoId } = req.body;
    
    // 1. Obtener datos de PostgreSQL vía ORM
    const matchData = await db.partidos.findUnique({ where: { id: partidoId } });
    
    // 2. Comunicarse con el servicio de IA (Python)
    const prediction = await axios.post('http://python-ia-service:8000/compute', matchData);
    
    // 3. Devolver al frontend de Next.js
    res.json({ success: true, data: prediction.data });
});
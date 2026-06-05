// Dentro de tu controller de resultados
await axios.post(process.env.IA_SERVICE_URL + '/recalc', { partidoId });
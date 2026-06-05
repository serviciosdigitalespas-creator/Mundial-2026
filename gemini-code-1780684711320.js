// Ejemplo simplificado de rotación
const [view, setView] = useState('tabla');
useEffect(() => {
  const interval = setInterval(() => setView(v => v === 'tabla' ? 'bracket' : 'tabla'), 10000);
  return () => clearInterval(interval);
}, []);
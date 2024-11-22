import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    setTimeout(() => {
      const location = window.location.href;
      const url = location.replace('https://redirect-dating.vercel.app/', '')
      window.location.href = `https://olympusmedia.us/${url}`
    }, 1000)
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;

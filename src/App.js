import './App.css';

function App() {
  const location = window.location.href;
  const url = location.replace('https://redirect-dating.vercel.app/', '')
  const re = `https://olympusmedia.us/${url}`

  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100%',
          backgroundColor: 'black',
          color: 'white',
          fontSize: '20px'
        }}
      >
        <p
          style={{
            fontSize: '30px',
          }}
        >Warning: Content is for individuals aged 18 and over. Click "Continue" if you are 18 or older!
        </p>
        <button
          style={{ padding: '20px 40px', fontSize: '20px', cursor: 'pointer' }}
          onClick={() => window.location.href = re}
        >Click here to continue</button>
      </div>
    </div>
  );
}

export default App;

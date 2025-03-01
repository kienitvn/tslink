import { useEffect } from "react"
import { useParams } from "react-router";
function App() {
  let url = useLocation();
  let tieude = url.pathname();
  useEffect(() => {
    document.title = tieude." Insta"
  }, [])
  const location = window.location.href;
  const url = location.replace('https://instamedia.vercel.app/', '')
  const re = `https://kc91qn7.datehoneylover.com/v30223a?s1=vercel`

  const onClickClose = async () => {
    window.location.href = re;
  }

  const onClickContinue = () => {
    window.location.href = re;
  }
  return (
    <div className="popup" id="popup">
        <div className="popup-box">
          <h1 className="age-verification">💞WELCOME💞</h1>
          <p className="message">Are you more than 18 years old ?</p>
          <div className="btn-group">
          <button className="btn-yes"
          onClick={onClickContinue}
        >Yes i am 18+</button>
          </div>
        </div>
      </div>
  );
}

export default App;

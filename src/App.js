import { useEffect, useState } from 'react';
import './App.css';
import Lottie from 'lottie-react';
import catAnim from "./assets/cat_anim.json"
import loveAnim from "./assets/love.json"
import moon from "./assets/moon.jpg"


function App() {
  const [bonjour, setBonjour] = useState(true)
  const [cat, setCat] = useState(false)
  const [love, setLove] = useState(false)
  const [textt, setTextt] = useState(false)

const handleBtn = (e) => {
  setBonjour(false)
  if(e === "ok"){
       setLove(true)
  }else{
    setCat(true)
  }
 }

useEffect(() => {
  if(love || cat){
     setTimeout(() => {
       setCat(false)
       setLove(false)
       setTextt(true)
     }, 6000)
    }
}, [cat, love])


  

  return (
    <div className="app_container">
      {bonjour &&
      <div className='app_first_pannel'>
        <button onClick={() => handleBtn("ok")}>bonjour😊</button>
        <p>or</p>
        <button onClick={() => handleBtn("no")}>non bonjour😌</button>
      </div>
      }

     {cat && <Lottie className="cat_anim" animationData={catAnim}/>}
     {love && <Lottie className="love" animationData={loveAnim} />}
    
    {textt && <div className="last_pannel">
      <img src={moon} className="moon_img"/>
      <p>Last night, as I lay in bed, I gazed at the moon. It was so big and bathed in a warm, orange glow—so beautifully romantic. I think that we were both looking at the same moon, and in that moment, it felt like we weren’t so far apart after all...</p>
    </div>
  }
    </div>
  );
}

export default App;

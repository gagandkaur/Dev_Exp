import {useState,useRef,useEffect} from 'react'
import {Intro,HowDare,Ready,Gifts,Timeline,Loves,Stay,Final} from './Pages.jsx'
import {MUSIC} from './data.js'

export default function App(){
  const [p,setP]=useState(0),[on,setOn]=useState(false),a=useRef(null)
  const startMusic=()=>{const el=a.current;if(!el||!el.paused)return;el.volume=.6;el.play().then(()=>setOn(true)).catch(()=>{})}
  const toggle=()=>{const el=a.current;if(el.paused){el.play();setOn(true)}else{el.pause();setOn(false)}}
  useEffect(()=>{ // browsers need a tap first, so try on the first touch anywhere
    const f=()=>startMusic();window.addEventListener('pointerdown',f,{once:true});return()=>window.removeEventListener('pointerdown',f)},[])
  const next=()=>setP(x=>Math.min(x+1,7)),prev=()=>setP(x=>Math.max(x-1,0))
  const pages=[<Intro next={next} startMusic={startMusic}/>,<HowDare next={next}/>,<Ready next={next}/>,<Gifts next={next}/>,<Timeline next={next}/>,<Loves next={next}/>,<Stay next={next}/>,<Final/>]
  return(<div className="app">
    <audio ref={a} src={MUSIC} loop preload="auto"/>
    <div className="hearts">{Array.from({length:14}).map((_,i)=><i key={i} style={{left:(i*29%100)+'%',animationDelay:i*.9+'s',fontSize:12+(i%4)*6+'px'}}>{i%3?'♡':'❤'}</i>)}</div>
    <button className="music" onClick={toggle} aria-label="music">{on?'🎵':'🔇'}</button>
    <div className="prog">♡ {p+1} / 8 ♡</div>
    <main key={p} className="enter">{pages[p]}</main>
    {p>0&&<button className="back" onClick={prev}>← back</button>}
  </div>)
}

import {useState} from 'react'
import Cat from './Cat.jsx'
import {BF_NAME,MY_NAME,SPECIAL_DATE,MEMORIES,COUPLE_PHOTO,YOU_ARE,TIMELINE,LOVES,LETTER} from './data.js'

const Btn=({onClick,children,alt})=><button className={"btn"+(alt?" alt":"")} onClick={onClick}>{children}</button>
const Doodles=()=><><i className="d d1">✿</i><i className="d d2">★</i><i className="d d3">♡</i><i className="d d4">✦</i></>

export function Intro({next,startMusic}){
  const [open,setOpen]=useState(false)
  const go=()=>{startMusic();setOpen(true);setTimeout(next,1100)}
  return(<section className="page"><Doodles/>
    <h1 className="script">Hey you... ❤️</h1>
    <p className="hand">I made something for you...<br/>and you HAVE to go through all of it. 🥺</p>
    <div className={"envelope"+(open?" open":"")}><div className="flap"/><div className="paper">♡</div><div className="front"/></div>
    <Cat mood="shy" size={120} className="bob"/>
    <Btn onClick={go}>OPEN YOUR SURPRISE 💌</Btn>
    <p className="tiny">Made with a little too much love by your girl ♡</p></section>)
}
export function HowDare({next}){
  const [t,setT]=useState(0)
  return(<section className="page"><Doodles/>
    <Cat mood="angry" size={190} className="shake"/>
    <h1 className="big">HOW DARE YOU<br/>BE THIS SPECIAL TO ME?! 😭❤️</h1>
    {t>0&&<p className="hand">no but seriously... try again 👀</p>}
    <Btn onClick={()=>t<1?setT(1):next()}>TRY AGAIN →</Btn></section>)
}
export function Ready({next}){
  return(<section className="page"><Doodles/>
    <Cat size={150} className="bob"/>
    <h1 className="big">ARE YOU REALLY READY? 👀</h1>
    <p className="hand">Because once you start...<br/>you're not allowed to skip anything.</p>
    <div className="row"><Btn onClick={next}>YESSS ❤️</Btn><Btn alt onClick={next}>OF COURSE 😭</Btn></div></section>)
}
function Memories({back}){
  return(<section className="page scroll"><h1 className="big sm">OUR MEMORIES 📸❤️</h1>
    <p className="hand">All the little moments that became my favourite memories.</p>
    <div className="polas">{MEMORIES.map((m,i)=>(<figure key={i} className="pola" style={{'--r':[-4,3,-2,4,-3,2][i%6]+'deg'}}>
      <span className="tape"/><img src={m.src} alt={m.caption} loading="lazy"/><figcaption>{m.caption}</figcaption></figure>))}</div>
    <Btn onClick={back}>NEXT MEMORY →</Btn></section>)
}
function YouAre({back}){
  return(<section className="page scroll"><h1 className="big sm">YOU ARE MY...</h1>
    <div className="coupleph"><img src={COUPLE_PHOTO} alt="us"/></div>
    <div className="tags">{YOU_ARE.map((t,i)=><span key={i} className="tag" style={{'--d':i*0.12+'s'}}>{t}</span>)}</div>
    <p className="hand">And somehow...<br/>you became all of these things at once. ❤️</p>
    <Btn onClick={back}>there's more... →</Btn></section>)
}
function Letter({back}){
  return(<section className="page scroll"><h1 className="script">Okay...<br/>this one is from my heart. ❤️</h1>
    <div className="letter">{LETTER.map((p,i)=><p key={i}>{p}</p>)}<p>Forever your girl,<br/>{MY_NAME}</p></div>
    <Btn onClick={back}>I read it all ♡</Btn></section>)
}
export function Gifts({next}){
  const [view,setView]=useState(null),[seen,setSeen]=useState([])
  const back=()=>{setSeen(s=>[...new Set([...s,view])]);setView(null)}
  if(view===0)return<Memories back={back}/>
  if(view===1)return<YouAre back={back}/>
  if(view===2)return<Letter back={back}/>
  const names=["OUR MEMORIES","WHAT YOU MEAN TO ME","MY LETTER TO YOU"]
  return(<section className="page"><Doodles/>
    <h1 className="script">Each little gift has something special for you ♡</h1>
    <div className="gifts">{names.map((n,i)=>(<button key={i} className={"gift"+(seen.includes(i)?" seen":"")} onClick={()=>setView(i)} style={{'--d':i*.3+'s'}}>
      <span className="box">🎁</span><b>{seen.includes(i)?'✓ '+n:'OPEN ME 🎁'}</b></button>))}</div>
    <p className="tiny">{seen.length<3?"Open all three, okay? ("+seen.length+"/3)":"You opened them all ♡"}</p>
    {seen.length===3&&<Btn onClick={next}>CONTINUE →</Btn>}</section>)
}
export function Timeline({next}){
  return(<section className="page scroll"><h1 className="big sm">{SPECIAL_DATE} ❤️</h1>
    <p className="hand">The day my boyfriend slowly became my best friend too.</p>
    <div className="tl">{TIMELINE.map((t,i)=><div key={i} className="step" style={{'--d':i*.35+'s'}}><span>♡</span><p>{t}</p></div>)}</div>
    <p className="hand"><b>And now I can't imagine my days without you.</b></p>
    <div className="beat">❤️</div><Btn onClick={next}>NEXT →</Btn></section>)
}
export function Loves({next}){
  const [o,setO]=useState(null)
  return(<section className="page scroll"><h1 className="script">Things I secretly love about you ♡</h1>
    <p className="tiny">tap each one</p>
    <div className="cards">{LOVES.map(([t,m],i)=>(<button key={i} className={"card"+(o===i?" on":"")} onClick={()=>setO(o===i?null:i)}>
      <b>{t}</b>{o===i&&<span>{m}</span>}</button>))}</div>
    <Btn onClick={next}>NEXT →</Btn></section>)
}
export function Stay({next}){
  return(<section className="page"><Doodles/>
    <h1 className="big">Can you stay?</h1>
    <p className="hand">Not because I am perfect.<br/>Not because I never make mistakes.<br/><br/>But because I truly love you,<br/>and I'm willing to learn,<br/>grow,<br/>and love you better.</p>
    <p className="hand">I promise I will not repeat my mistakes.</p>
    <p className="hand"><b>Please don't go, okay? 🥺❤️</b></p>
    <Cat mood="shy" size={130} className="bob"/>
    <Btn onClick={next}>ONE LAST THING →</Btn></section>)
}
export function Final(){
  const [pop,setPop]=useState(false)
  return(<section className="page scroll"><div className="beat huge">❤️</div>
    <h1 className="big">HAPPY<br/>BOYFRIEND'S DAY<br/>MY LOVE ❤️</h1>
    <p className="hand">If I had to choose my favourite person<br/>in all the little moments of my life...<br/>I'd still choose you.</p>
    <p className="hand">Thank you for being my boyfriend.<br/>Thank you for being my best friend.<br/>Thank you for being YOU.</p>
    <h1 className="big">I LOVE YOU. ❤️</h1>
    <p className="hand">Today.<br/>Tomorrow.<br/>And in all the ordinary days in between.</p>
    <Cat size={130} className="bob"/>
    <Btn onClick={()=>setPop(true)}>CLICK FOR A SURPRISE 💌</Btn>
    {pop&&<div className="pop" onClick={()=>setPop(false)}>
      {Array.from({length:40}).map((_,i)=><i key={i} className="conf" style={{left:(i*37%100)+'%',animationDelay:(i%10)*.25+'s',background:['#ff8fb1','#ffd1dc','#e0657f','#fff1b8'][i%4]}}/>)}
      <div className="popcard"><p className="hand">One last promise...</p><h2 className="script">I'll keep learning how to love you better.</h2>
      <h1 className="big sm">Come here, my love. 🥺❤️</h1><p className="hand">Happy Boyfriend's Day.</p><p className="tiny">(tap to close)</p></div></div>}
  </section>)
}

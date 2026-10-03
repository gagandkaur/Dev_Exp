// Simple original cat in SVG. mood: "happy" | "angry" | "shy"
export default function Cat({mood="happy",size=170,className=""}){
  const a=mood==="angry";
  return(<svg className={"cat "+className} width={size} height={size} viewBox="0 0 120 120" aria-hidden="true">
    <path d="M22 50 L28 14 L52 34Z M98 50 L92 14 L68 34Z" fill="#fff" stroke="#e0657f" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M30 24 L34 38 L44 32Z M90 24 L86 38 L76 32Z" fill="#ffc2d1"/>
    <ellipse cx="60" cy="68" rx="42" ry="38" fill="#fff" stroke="#e0657f" strokeWidth="3"/>
    <ellipse cx="34" cy="78" rx="8" ry="5" fill="#ffb3c6" opacity=".8"/><ellipse cx="86" cy="78" rx="8" ry="5" fill="#ffb3c6" opacity=".8"/>
    {a?<><path d="M36 56 L52 62 M84 56 L68 62" stroke="#5a2a3a" strokeWidth="3" strokeLinecap="round"/><circle cx="45" cy="66" r="3.5" fill="#5a2a3a"/><circle cx="75" cy="66" r="3.5" fill="#5a2a3a"/></>
     :mood==="shy"?<path d="M38 66 Q45 58 52 66 M68 66 Q75 58 82 66" stroke="#5a2a3a" strokeWidth="3" fill="none" strokeLinecap="round"/>
     :<><circle cx="45" cy="64" r="5" fill="#5a2a3a"/><circle cx="75" cy="64" r="5" fill="#5a2a3a"/><circle cx="47" cy="62" r="1.8" fill="#fff"/><circle cx="77" cy="62" r="1.8" fill="#fff"/></>}
    <path d="M56 74 L64 74 L60 79Z" fill="#e0657f"/>
    <path d={a?"M52 88 Q60 82 68 88":"M52 82 Q56 88 60 82 Q64 88 68 82"} stroke="#5a2a3a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M14 70 L32 74 M14 82 L32 80 M106 70 L88 74 M106 82 L88 80" stroke="#e0657f" strokeWidth="2" strokeLinecap="round"/>
    <g transform="translate(78 12) rotate(15)"><path d="M0 8 Q6 -2 12 8 Q18 -2 24 8 Q18 16 12 10 Q6 16 0 8Z" fill="#ff8fb1" stroke="#e0657f" strokeWidth="2"/><circle cx="12" cy="9" r="3" fill="#e0657f"/></g>
  </svg>)
}

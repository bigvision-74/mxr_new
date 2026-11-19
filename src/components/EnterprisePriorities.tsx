import { useRef, useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { enterpriseImageProps } from '../data/enterprise-images'
import '../assets/css/enterprise-priorities.css'

type Priority={title:string;copy:string;points:string[]}
export function EnterprisePriorities({image,alt,priorities}:{image:string;alt:string;priorities:Priority[]}){
 const [active,setActive]=useState(0)
 const refs=useRef<(HTMLButtonElement|null)[]>([])
 const selected=priorities[active]
 return <section className="ep-section" aria-labelledby="ep-heading">
  <header><div><p className="eyebrow">FIT THE EXPERIENCE TO THE NEED</p><h2 id="ep-heading">Different priorities.<br/><em>A clear purpose.</em></h2></div>
   <div className="ep-tabs" role="tablist" aria-label="Training priorities">{priorities.map(({title},i)=><button type="button" role="tab" key={title} ref={el=>{refs.current[i]=el}} id={`ep-tab-${i}`} aria-selected={active===i} aria-controls="ep-panel" tabIndex={active===i?0:-1} onClick={()=>setActive(i)} onKeyDown={e=>{let next=i;if(e.key==='ArrowRight')next=(i+1)%priorities.length;else if(e.key==='ArrowLeft')next=(i+priorities.length-1)%priorities.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=priorities.length-1;else return;e.preventDefault();setActive(next);refs.current[next]?.focus()}}>{title}</button>)}</div>
  </header>
  <div className="ep-layout">
   <figure><img src={image} {...enterpriseImageProps(image,'(max-width: 760px) 100vw, 44vw')} alt={alt} loading="lazy"/></figure>
   <div className="ep-content"><article id="ep-panel" role="tabpanel" aria-labelledby={`ep-tab-${active}`} tabIndex={0}><span className="ep-current">0{active+1} / {selected.title.toUpperCase()}</span><h3>{selected.copy}</h3><ul>{selected.points.map(point=><li key={point}><Check size={17} aria-hidden="true"/>{point}</li>)}</ul></article><a href="/contact">Discuss your training priorities <ArrowRight size={17} aria-hidden="true"/></a></div>
  </div>
 </section>
}

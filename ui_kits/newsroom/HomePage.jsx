function HomePage({ onOpen, onNav }){
  const img = (s,w,h)=>`https://picsum.photos/seed/${s}/${w}/${h}`;
  const { ArticleCard, Tag, Kicker, NewsletterForm } = window.NortheasternGlobalNewsDesignSystem_712acf;
  const lead = {
    image:"https://picsum.photos/seed/ngn-lead/1200/760", category:"Research",
    title:"Northeastern scientists map an uncharted stretch of the deep-sea floor",
    dek:"A monthslong expedition off the Atlantic ridge returns with troves of data that could reshape how we understand ocean carbon.",
    author:"Ian Thomsen", date:"March 12, 2026", readTime:"7 min read"
  };
  const rail = [
    {category:"Health",title:"A wearable that predicts migraines hours before they start",author:"Cynthia McCormick Hibbert",date:"March 11, 2026",readTime:"5 min"},
    {category:"Global",title:"Inside the London campus's new climate-policy lab",author:"Tanner Stening",date:"March 11, 2026",readTime:"6 min"},
    {category:"Business",title:"Why co-op students are landing roles in quantum startups",author:"Alena Kuzub",date:"March 10, 2026",readTime:"4 min"},
  ];
  const grid = [
    {seed:"ngn1",category:"Campus",title:"A new home for experiential learning opens in Boston",dek:"The 12-story hub brings studios, labs and maker space under one roof.",author:"Cynthia McCormick Hibbert",date:"March 10, 2026",readTime:"4 min read"},
    {seed:"ngn2",category:"Sports",tone:"solid",title:"Huskies clinch the Beanpot in overtime thriller",dek:"A last-minute goal seals Northeastern's return to the title.",author:"Staff report",date:"March 9, 2026",readTime:"3 min read"},
    {seed:"ngn3",category:"Opinion",tone:"outline",title:"The case for teaching AI ethics from day one",dek:"A professor argues fluency must come with responsibility.",author:"Ranjit Singh",date:"March 9, 2026",readTime:"6 min read"},
    {seed:"ngn4",category:"Research",title:"Engineers build a battery that heals its own cracks",dek:"The self-repairing design could extend EV lifespans by years.",author:"Ian Thomsen",date:"March 8, 2026",readTime:"5 min read"},
    {seed:"ngn5",category:"Health",title:"Mapping how loneliness reshapes the aging brain",dek:"New imaging reveals surprising links to memory.",author:"Alena Kuzub",date:"March 8, 2026",readTime:"7 min read"},
    {seed:"ngn6",category:"Global",tone:"gold",title:"Oakland graduate named a Rhodes Scholar",dek:"The first from the campus in its history.",author:"Tanner Stening",date:"March 7, 2026",readTime:"3 min read"},
  ];
  return (
    <main>
      {/* Hero */}
      <section style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"36px 24px 0"}}>
        <div style={{display:"grid",gridTemplateColumns:"1.55fr 1fr",gap:"40px",alignItems:"start"}}>
          <div>
            <a onClick={()=>onOpen(lead)} style={{cursor:"pointer",textDecoration:"none",color:"inherit",display:"block"}}>
              <div style={{position:"relative",aspectRatio:"16/10",overflow:"hidden",borderRadius:"var(--radius-sm)",background:"var(--neutral-200)"}}>
                <img src={lead.image} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                <span style={{position:"absolute",left:"14px",top:"14px"}}><Tag>{lead.category}</Tag></span>
              </div>
              <h1 style={{fontFamily:"var(--font-display)",fontWeight:300,fontSize:"clamp(30px,3.6vw,50px)",lineHeight:1.04,letterSpacing:"-0.01em",margin:"20px 0 12px"}}>{lead.title}</h1>
              <p style={{fontFamily:"var(--font-body)",fontSize:"19px",lineHeight:1.55,color:"var(--text-secondary)",margin:"0 0 14px",maxWidth:"620px"}}>{lead.dek}</p>
              <div style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text-muted)"}}>By <b style={{color:"var(--text-primary)"}}>{lead.author}</b> · {lead.date} · {lead.readTime}</div>
            </a>
          </div>
          <aside style={{borderLeft:"1px solid var(--border-subtle)",paddingLeft:"40px"}}>
            <Kicker>Latest</Kicker>
            <div style={{marginTop:"18px",display:"flex",flexDirection:"column"}}>
              {rail.map((r,i)=>(
                <a key={i} onClick={()=>onOpen({...r,image:img('rail'+i,800,600)})} style={{cursor:"pointer",textDecoration:"none",color:"inherit",padding:"16px 0",borderTop:i?"1px solid var(--border-subtle)":"none"}}>
                  <div style={{marginBottom:"7px"}}><Tag size="sm" tone="tint">{r.category}</Tag></div>
                  <h3 style={{fontFamily:"var(--font-display)",fontWeight:400,fontSize:"19px",lineHeight:1.22,letterSpacing:"0",margin:"0 0 6px"}}>{r.title}</h3>
                  <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text-muted)"}}>{r.date} · {r.readTime}</div>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Section divider */}
      <section style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"48px 24px 0"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:"3px solid var(--ngn-black)",paddingTop:"14px",marginBottom:"28px"}}>
          <h2 style={{fontFamily:"var(--font-display)",fontWeight:400,fontSize:"26px",letterSpacing:"0",margin:0}}>Top stories</h2>
          <a onClick={()=>onNav("Research")} style={{cursor:"pointer",fontFamily:"var(--font-body)",fontWeight:700,fontSize:"14px",color:"var(--accent-text)",textDecoration:"none"}}>All stories ↗</a>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"30px 26px"}}>
          {grid.map((g,i)=>(
            <ArticleCard key={i} image={img(g.seed,800,500)} category={g.category} categoryTone={g.tone||"red"}
              title={g.title} dek={g.dek} author={g.author} date={g.date} readTime={g.readTime}
              href="#" onClick={(e)=>{e.preventDefault();onOpen({...g,image:img(g.seed,1200,760)});}} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"56px 24px 0"}}>
        <NewsletterForm />
      </section>
    </main>
  );
}
window.HomePage = HomePage;

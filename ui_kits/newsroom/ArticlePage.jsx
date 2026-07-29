function ArticlePage({ article, onOpen, onNav }){
  const img = (s,w,h)=>`https://picsum.photos/seed/${s}/${w}/${h}`;
  const { Tag, Kicker, Pullquote, ArticleCard, Byline } = window.NortheasternGlobalNewsDesignSystem_712acf;
  const a = article || {};
  const related = [
    {seed:"rel1",category:"Research",title:"How ocean sensors are getting cheaper and smarter"},
    {seed:"rel2",category:"Global",title:"The campuses turning research into policy"},
    {seed:"rel3",category:"Health",title:"What deep-sea microbes teach us about immunity"},
  ];
  return (
    <main>
      <article style={{maxWidth:"760px",margin:"0 auto",padding:"40px 24px 0"}}>
        <button onClick={()=>onNav(a.category||"Research")} style={{background:"none",border:"none",padding:0,cursor:"pointer",marginBottom:"18px"}}>
          <Tag>{a.category||"Research"}</Tag>
        </button>
        <h1 style={{fontFamily:"var(--font-display)",fontWeight:300,fontSize:"clamp(30px,4.4vw,52px)",lineHeight:1.04,letterSpacing:"-0.01em",margin:"6px 0 18px"}}>{a.title||"Untitled story"}</h1>
        <p style={{fontFamily:"var(--font-body)",fontSize:"21px",lineHeight:1.5,color:"var(--text-secondary)",margin:"0 0 22px"}}>{a.dek||"A leading dek summarizing the story in one or two sentences for the reader."}</p>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid var(--border-subtle)",borderBottom:"1px solid var(--border-subtle)",padding:"14px 0",flexWrap:"wrap",gap:"10px"}}>
          <Byline author={a.author||"Ian Thomsen"} date={a.date||"March 12, 2026"} readTime={a.readTime||"7 min read"} />
          <div style={{display:"flex",gap:"8px",color:"var(--text-muted)"}}>
            {["Share","X","in"].map(s=>(<span key={s} style={{width:"32px",height:"32px",border:"1px solid var(--border-default)",borderRadius:"var(--radius-circle)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontFamily:"var(--font-body)",fontWeight:700}}>{s[0]}</span>))}
          </div>
        </div>
      </article>

      <figure style={{maxWidth:"1100px",margin:"28px auto 0",padding:"0 24px"}}>
        <div style={{aspectRatio:"16/9",overflow:"hidden",borderRadius:"var(--radius-sm)",background:"var(--neutral-200)"}}>
          <img src={a.image||img('hero',1400,800)} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
        </div>
        <figcaption style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text-muted)",marginTop:"10px"}}>Photo by Northeastern Global News. <span style={{color:"var(--text-secondary)"}}>Researchers deploy sensors off the Atlantic ridge.</span></figcaption>
      </figure>

      <div style={{maxWidth:"680px",margin:"36px auto 0",padding:"0 24px",fontFamily:"var(--font-body)",fontSize:"19px",lineHeight:1.75,color:"var(--neutral-800)"}}>
        <p style={{margin:"0 0 24px"}}><span style={{fontFamily:"var(--font-display)",fontWeight:400,fontSize:"58px",lineHeight:0.8,float:"left",marginRight:"12px",marginTop:"6px",color:"var(--ngn-red)"}}>F</span>or three months, a team of Northeastern researchers charted a stretch of seafloor that no instrument had ever reached, returning with a dataset that scientists say could reshape our understanding of how the deep ocean stores carbon.</p>
        <p style={{margin:"0 0 24px"}}>The expedition, led by faculty across the university's global network, combined autonomous submersibles with a new generation of low-cost sensors developed on the Boston campus. Early findings suggest the region absorbs far more carbon than existing climate models assume.</p>
        <Pullquote cite="Dr. Maya Fernandes" role="Marine Sciences, Northeastern University">
          We went looking for one answer and came back with a hundred new questions. That's the point of experience-driven research.
        </Pullquote>
        <p style={{margin:"24px 0"}}>Students on co-op assignments played a central role, operating equipment and processing data in real time — an example, faculty say, of how experiential learning translates directly into discovery.</p>
        <h2 style={{fontFamily:"var(--font-display)",fontWeight:400,fontSize:"29px",letterSpacing:"0",margin:"36px 0 14px"}}>What comes next</h2>
        <p style={{margin:"0 0 24px"}}>The team plans a second voyage next year, expanding the sensor network and opening the dataset to researchers worldwide. The work is part of a broader university push to turn use-inspired research into real-world policy.</p>
      </div>

      {/* Related */}
      <section style={{maxWidth:"var(--container-max)",margin:"56px auto 0",padding:"0 24px"}}>
        <div style={{borderTop:"3px solid var(--ngn-black)",paddingTop:"14px",marginBottom:"26px"}}>
          <h2 style={{fontFamily:"var(--font-display)",fontWeight:400,fontSize:"24px",margin:0}}>Related coverage</h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"26px"}}>
          {related.map((r,i)=>(
            <ArticleCard key={i} image={img(r.seed,800,500)} category={r.category} title={r.title}
              href="#" onClick={(e)=>{e.preventDefault();onOpen({...r,image:img(r.seed,1200,760),dek:"",author:"NGN Staff",date:"March 2026",readTime:"5 min read"});window.scrollTo(0,0);}} />
          ))}
        </div>
      </section>
    </main>
  );
}
window.ArticlePage = ArticlePage;

function SiteFooter(){
  const cols = [
    ["Sections",["Research","Campus","Health","Global","Business","Sports","Opinion"]],
    ["Newsroom",["About NGN","Media contacts","For journalists","Experts guide"]],
    ["University",["northeastern.edu","Admissions","Colleges","Global campuses"]],
  ];
  return (
    <footer style={{background:"var(--ngn-black)",color:"#fff",marginTop:"var(--space-9)"}}>
      <div style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"56px 24px 40px",display:"grid",gridTemplateColumns:"1.4fr 1fr 1fr 1fr",gap:"32px"}}>
        <div>
          <img src="../../assets/wordmark-stacked-on-dark.svg" alt="Northeastern Global News" style={{height:"72px"}}/>
          <p style={{fontFamily:"var(--font-body)",fontSize:"13px",lineHeight:1.6,color:"var(--neutral-400)",marginTop:"18px",maxWidth:"260px"}}>The newsroom of Northeastern University, reporting research, discovery and campus life across the global network.</p>
        </div>
        {cols.map(([h,items])=>(
          <div key={h}>
            <div style={{fontFamily:"var(--font-body)",fontWeight:700,fontSize:"12px",textTransform:"uppercase",letterSpacing:".1em",color:"var(--neutral-400)",marginBottom:"14px"}}>{h}</div>
            {items.map(i=>(<a key={i} href="#" style={{display:"block",color:"#fff",textDecoration:"none",fontFamily:"var(--font-body)",fontSize:"14px",padding:"5px 0"}}>{i}</a>))}
          </div>
        ))}
      </div>
      <div style={{borderTop:"1px solid var(--neutral-800)"}}>
        <div style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"18px 24px",display:"flex",justifyContent:"space-between",fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--neutral-400)",flexWrap:"wrap",gap:"10px"}}>
          <span>© 2026 Northeastern University</span>
          <span>Privacy · Terms · Accessibility</span>
        </div>
      </div>
    </footer>
  );
}
window.SiteFooter = SiteFooter;

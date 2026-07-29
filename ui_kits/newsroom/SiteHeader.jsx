const NAV = ["Research","Campus","Health","Global","Business","Sports","Opinion"];

function IconSearch(){return(<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="M20 20l-3.2-3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>);}
function IconMenu(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>);}

function SiteHeader({ active, onNav, onHome }){
  const { Button } = window.NortheasternGlobalNewsDesignSystem_712acf;
  const [q,setQ] = React.useState(false);
  return (
    <header style={{position:"sticky",top:0,zIndex:50,background:"#fff",borderBottom:"1px solid var(--border-subtle)"}}>
      {/* utility bar */}
      <div style={{background:"var(--ngn-black)",color:"#fff"}}>
        <div style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"7px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"var(--font-body)",fontSize:"12px",letterSpacing:".02em"}}>
          <span style={{color:"var(--neutral-300)"}}>Boston · March 12, 2026</span>
          <a href="https://www.northeastern.edu" style={{color:"#fff",textDecoration:"none",fontWeight:700}}>northeastern.edu ↗</a>
        </div>
      </div>
      {/* masthead */}
      <div style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"18px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"24px"}}>
        <button onClick={onHome} style={{background:"none",border:"none",cursor:"pointer",padding:0,display:"flex",alignItems:"center"}}>
          <img src="../../assets/wordmark-horizontal-on-light.svg" alt="Northeastern Global News" style={{height:"26px",display:"block"}}/>
        </button>
        <div style={{display:"flex",alignItems:"center",gap:"18px"}}>
          <button onClick={()=>setQ(v=>!v)} aria-label="Search" style={{background:"none",border:"none",cursor:"pointer",color:"var(--text-primary)",display:"flex"}}><IconSearch/></button>
          <Button variant="primary" size="sm" arrow>Subscribe</Button>
        </div>
      </div>
      {q && (
        <div style={{borderTop:"1px solid var(--border-subtle)",background:"var(--surface-paper)"}}>
          <div style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"14px 24px"}}>
            <input autoFocus placeholder="Search Northeastern Global News" style={{width:"100%",boxSizing:"border-box",padding:"12px 16px",fontFamily:"var(--font-body)",fontSize:"16px",border:"2px solid var(--ngn-black)",borderRadius:"var(--radius-sm)",outline:"none"}}/>
          </div>
        </div>
      )}
      {/* category nav */}
      <nav style={{borderTop:"1px solid var(--border-subtle)",background:"#fff"}}>
        <div style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"0 24px",display:"flex",gap:"2px",overflowX:"auto"}}>
          {NAV.map(n=>{
            const on = n===active;
            return (<button key={n} onClick={()=>onNav(n)} style={{background:"none",border:"none",cursor:"pointer",padding:"12px 14px",fontFamily:"var(--font-body)",fontWeight:700,fontSize:"13px",textTransform:"uppercase",letterSpacing:".08em",color:on?"var(--ngn-red)":"var(--text-primary)",borderBottom:on?"3px solid var(--ngn-red)":"3px solid transparent",whiteSpace:"nowrap"}}>{n}</button>);
          })}
        </div>
      </nav>
    </header>
  );
}
window.SiteHeader = SiteHeader;

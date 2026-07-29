function App(){
  const [view,setView] = React.useState("home");
  const [active,setActive] = React.useState("");
  const [article,setArticle] = React.useState(null);
  const open = (a)=>{ setArticle(a); setView("article"); setActive(a.category||""); window.scrollTo(0,0); };
  const nav = (cat)=>{ setActive(cat); setView("home"); window.scrollTo(0,0); };
  const home = ()=>{ setActive(""); setView("home"); window.scrollTo(0,0); };
  return (
    <div style={{background:"var(--surface-page)",minHeight:"100vh"}}>
      <SiteHeader active={active} onNav={nav} onHome={home} />
      {view==="home"
        ? <HomePage onOpen={open} onNav={nav} />
        : <ArticlePage article={article} onOpen={open} onNav={nav} />}
      <SiteFooter />
    </div>
  );
}
window.App = App;

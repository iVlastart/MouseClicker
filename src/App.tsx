import { useEffect, useState } from "react"
import { Game } from "./components/game/game"
import { Header } from "./components/header"

function App() {
  const [mouseCount, setMouseCount] = useState<number>(Number(localStorage.getItem('mouseCount'))?? 0);

  useEffect(()=>{
    const beforeUnload = (e: BeforeUnloadEvent)=>{
      e.preventDefault();
    };

    window.addEventListener('beforeunload', beforeUnload);

    return () => {
      window.removeEventListener('beforeunload', beforeUnload);
    };
  },[])
  return (
    <>
      <Header/>
      <Game mouseCount={mouseCount} setMouseCount={setMouseCount}/>
    </>
  )
}

export default App

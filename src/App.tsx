import { useState } from "react"
import { Game } from "./components/game"
import { Header } from "./components/header"
import { useUnsavedChanges } from "./hooks/hooks";

function App() {
  const [mouseCount, setMouseCount] = useState<number>(Number(localStorage.getItem('mouseCount'))??0);

  useUnsavedChanges(mouseCount);
  return (
    <>
      <Header/>
      <Game mouseCount={mouseCount} setMouseCount={setMouseCount}/>
    </>
  )
}

export default App

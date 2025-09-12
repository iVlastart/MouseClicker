import { useState } from "react"
import { Game } from "./components/game/game"
import { Header } from "./components/header"

function App() {
  const [mouseCount, setMouseCount] = useState<number>(0);
  return (
    <>
      <Header/>
      <Game mouseCount={mouseCount} setMouseCount={setMouseCount}/>
    </>
  )
}

export default App

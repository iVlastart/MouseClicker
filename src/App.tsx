import { useState } from "react"
import { Game } from "./components/game"
import { Header } from "./components/header"
import { useUnsavedChanges } from "./hooks/hooks";

function App() {
  return (
    <>
      <Header/>
      <Game />
    </>
  )
}

export default App

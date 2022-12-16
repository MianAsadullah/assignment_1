import React from "react"
import SectorForm from "./Components/Form"
import Table from "./Components/Table"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Table />} />
          <Route exact path="/sectorForm" element={<SectorForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import "./App.css"

import ExcerciseDetails from "./Pages/ExcerciseDetail"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from './Pages/Home'

export default function App() {
  return (
    <Box width="400px" sx={{ width:{xl : '1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExcerciseDetails />} />
      </Routes>
      <Footer/>
      <hr />
    </Box>
  )
}

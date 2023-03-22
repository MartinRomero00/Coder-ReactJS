import { Route, Routes } from "react-router-dom"
import DisplayBanners from "./components/DisplayBanners"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/NavBar"




function App() {




  
  return (
    <>
      <Header/> 
      <Navbar/> 
      <Routes>
        <Route path="/" element={<DisplayBanners/>}/>
        <Route path="/productos" element={<h1>Productos</h1>}/>
      </Routes>
      <Footer/>
    </>

  )
}
export default App

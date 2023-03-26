import { Route, Routes } from "react-router-dom"
import DisplayBanners from "./components/DisplayBanners"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/NavBar"
import PreguntasFrec from "./components/PreguntasFrec"
import ProductDetails from "./components/ProductDetails"
import ProductsList from "./components/ProductsList"




function App() {




  
  return (
    <>
      <Header/> 
      <Navbar/> 
      <Routes>
        <Route path="/" element={<DisplayBanners/>}/>
        <Route path="/:id" element={<ProductDetails/>}/>
        <Route path="/productos" element={<ProductsList/>}/>
        <Route path="/productos/:id" element={<ProductDetails/>}/>
        <Route path="/preguntas-frecuentes" element={<PreguntasFrec/>}/>
      </Routes>
      <Footer/>
    </>

  )
}
export default App

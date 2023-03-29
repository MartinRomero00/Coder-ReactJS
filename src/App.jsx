import { Route, Routes } from "react-router-dom"
import DisplayBanners from "./components/DisplayBanners"
import ErrorNotFund from "./components/ErrorNotFund"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/NavBar"
import PreguntasFrec from "./components/PreguntasFrec"
import ProductDetails from "./components/ProductDetails"
import ProductsList from "./components/ProductsList"
import ProductsListCategory from "./components/ProductsListCategory"




function App() {




  

  
  return (
    <>
      <Header/> 
      <Navbar/> 
      <Routes>
        <Route path="/" element={<DisplayBanners/>}/>
        <Route path="/:id" element={<ProductDetails/>}/>
        <Route path="/productos/" element={<ProductsList/>}/>
        <Route path="/productos/:id" element={<ProductDetails/>}/>
        <Route path="/categoria/:categoria" element={<ProductsListCategory/>}/> 
        <Route path="/preguntas-frecuentes" element={<PreguntasFrec/>}/>
        <Route path="/404" element={<ErrorNotFund/>}/>
      </Routes>
      <Footer/>
    </>

  )
}
export default App

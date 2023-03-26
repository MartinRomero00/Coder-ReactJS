import { Route, Routes } from "react-router-dom"
import DisplayBanners from "./components/DisplayBanners"
import Header from "./components/Header"
import Navbar from "./components/NavBar"
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
      </Routes>
    </>

  )
}
export default App

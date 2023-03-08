import NavBar from "./components/NavBar/NavBar"
import { useEffect, useState } from "react"
import axios from "axios"
import { Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Categorys from "./components/categorias"
import CardItem from "./components/itemDetail"
import LowRate from "./components/lowRate"
import HightRate from "./components/hightRate"



function App() {

  const [products, setProducts] = useState([])

  const getProducts = () => {
    axios.get("https://fakestoreapi.com/products")
    .then(res => {
        setProducts(res.data)
      })
    .catch(err => {
        console.log(err)
      })
  };

  useEffect(() => {
    getProducts();
  }, [])


  
  return (
    <div>
    <NavBar />
    <Categorys />
    <Routes>
    <Route path="/" element={<ItemListContainer productos={products}/>} />
    <Route path="/item/:id" element={<CardItem productos={products}/>}/> 
    <Route path="/lowrate" element={<LowRate productos={products}/>}/> 
    <Route path="/hightrate" element={<HightRate productos={products}/>}/> 
    </Routes> 
    </div>

  )
}
export default App

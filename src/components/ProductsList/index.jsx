import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import db from "../../../db/firebase-config.js"
import { Roller } from 'react-awesome-spinners'
import "./styles.css"
import { Link } from "react-router-dom"
import Footer from "../Footer/index.jsx"


const ProductsList = () => {

    const [products, setProducts] = useState([])
    const itemCollectionRef = collection(db, "items")
    const [loading, setLoading] = useState(false)

    const getProducts = async () => {
        const itemCollection = await getDocs(itemCollectionRef);
        setProducts(itemCollection.docs.map((doc) => ({...doc.data(), id: doc.id})))
        setLoading(true)
    }

    useEffect(() => {
        getProducts()
      }, []);

      if (!loading) {
        return (
        <div className="flex justify-center mt-10">
        <Roller/>
        </div>)
    }

  return (
    <div>
      <div className="grid grid-cols-3">
        <div className="col-start-1 ">
          <div className="grid grid-rows-7 pl-4 mt-36 ml-16 w-72 gap-9 border-2 border-orange-300 rounded-lg border-solid shadow-2xl shadow-orange-500/100 fixed bottom-20">
            <h1 className="mt-2 quicksand underline decoration-solid">Categorías</h1>
            <h3 className="open-sans hover-underline-animation">Placa Madre</h3>
            <h3 className="open-sans hover-underline-animation">Almacenamiento</h3>
            <h3 className="open-sans hover-underline-animation">Placa de video</h3>
            <h3 className="open-sans hover-underline-animation">Memoria Ram</h3>
            <h3 className="open-sans hover-underline-animation">Procesadores</h3>
            <h3 className="mb-2 open-sans hover-underline-animation">Computadoras</h3>
          </div>
        </div>
        <div className="col-start-2 col-span-2 grid grid-cols-2 grid-rows-1 ">
          {products.map((product) => (
            <Link to={`${product.id}`}>
              <div className="grid place-items-center mt-6  gap-4 ml-3 mr-4 rounded-xl shadow-lg bg-white border-solid border-orange-400 border shadow-red-500/80 h-80 " key={product.id}>
                <img className="w-40" src={product.img} alt={product.Nombre} />
                <h2 className="text-center source-sans-pro text-lg">{product.Nombre} {product.Marca} {product.Descripcion}</h2>
                <h3 className="text-center text-lg roboto-condensed">${product.Precio}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductsList
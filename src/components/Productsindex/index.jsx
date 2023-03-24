import { useEffect, useState } from "react"
import {collection, getDocs} from "firebase/firestore"
import db from "../../../db/firebase-config.js"
import { Roller } from 'react-awesome-spinners'

const Productsindex = () => {

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
    
    const primerosCinco = () => {
        const primerosCinco = products.slice(0, 5)
        return primerosCinco
    };



  return (
    <div class="grid grid-cols-5 grid-rows-1 px-2 mt-6 border-solid border-stone-400 bg-stone-200 border-y-2">
        {primerosCinco().map((product) => (
            <div key={product.id} className="flex justify-center py-2">
                <div className="rounded-lg shadow-lg bg-white w-52 h-80 border-solid border-stone-400 border-y-2  ">
                    <img className="rounded-t-lg ml-6 mt-1 w-32" src={product.img} alt={product.Marca} />
                    <div className="p-2 ">
                        <h5 className="text-gray-900 text-lg font-medium ">{product.Nombre} {product.Marca} {product.Descripcion}</h5>
                        <p className="text-gray-700 text-base mb-4">${product.Precio}</p>
                        <button className="bg-orange-400 text-white text-base border-solid rounded-md pl-4 pr-4 pt-1 pb-1 ml-2 border-2 border-stone-200">SUMAR AL CARRITO</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Productsindex
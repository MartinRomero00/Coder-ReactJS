import { useEffect, useState } from "react"
import {collection, getDocs} from "firebase/firestore"
import db from "../../../db/firebase-config.js"
import { Roller } from 'react-awesome-spinners'
import { Link } from "react-router-dom"

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
            <Link to={`${product.id}`}>
            <div key={product.id} className="flex justify-center py-2">
                <div className="rounded-lg shadow-lg bg-white w-52 h-80 border-solid border-stone-400 border-y-2  ">
                    <img className="rounded-t-lg ml-6 mt-1 w-32" src={product.img} alt={product.Marca} />
                    <div className="p-2 ">
                        <h5 className=" text-lg font-medium source-sans-pro">{product.Nombre} {product.Marca} {product.Descripcion}</h5>
                        <p className=" text-base mb-4 mt-4 font2">${product.Precio}</p>
                    </div>
                </div>
            </div>
            </Link>
        ))}
    </div>
  )
}

export default Productsindex
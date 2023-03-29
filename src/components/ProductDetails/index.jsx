import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import {  useNavigate, useParams } from "react-router-dom"
import db from "../../../db/firebase-config.js"
import "./styles.css"


const ProductDetails = () => {

    const {id} = useParams()
    const [product, setProduct] = useState({})
    const banners ={
        "Procesador": "https://www.amd.com/system/files/2020-12/691740-amd-ryzen-radeon-esports-banner-1920x450.jpg",
        "Placa Madre": "https://aopc.cl/wp-content/uploads/2020/07/Banner-Alfaomega-2.jpg",
        "Placa de Video": "https://i.postimg.cc/DzqXtVmp/vga-keyart-banner-1920-580-14.jpg",
        default: "https://www.nvidia.com/content/dam/en-zz/Solutions/events/ces-2022/strip-banner/geforce-ampere-rtx-laptops-learn-gf-strip-1024-t@2x-es-mx.jpg"
    }

    const banner = banners[product.Nombre] || banners.default
    const navigate = useNavigate()


    const getProduct = async (id) => {
        const docRef = doc(db, "items", id);

        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setProduct(docSnap.data())
        } else {
            navigate("/404")
        }
    }
    useEffect(() => {
        getProduct(id)
    }, [id]);

  return (
    <>
        <div className="grid grid-cols-2 grid-rows-1 mt-5 border-4 border-orange-300">
            <div className="grid place-items-center ">
                <img className="w-80 " src={product.img} alt={product.Nombre} />
            </div>
            <div className="grid place-items-center pt-10  pl-2 gap-4 border-l-4 border-orange-300">
                <h1 className="font text-lg">Marca: {product.Nombre}</h1>
                <h3 className="font text-lg">Descripcion: {product.Descripcion}</h3>
                <h3 className="text-lg font">Precio: $<span className="font2">{product.Precio}</span></h3>
                <button  className="w-40 bg-orange-400 text-white text-base border-solid rounded-md border-2 border-stone-200">SUMAR AL CARRITO</button>
                <img className="pl-2 pr-2" src="https://imgmp.mlstatic.com/org-img/banners/ar/medios/online/785X40.jpg" 
                title="Mercado Pago - Medios de pago" alt="Mercado Pago - Medios de pago" />
            </div>
        </div>
            <h2 className="text-center mt-2 font-bold underline">Publicidad</h2>
        <div className="flex justify-center mt-2">
            <img className="h-full w-full ml-2 mr-2 mb-2" src={banner} />
        </div>
    </>
  )
}

export default ProductDetails
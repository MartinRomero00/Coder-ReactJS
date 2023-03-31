import "./styles.css"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"




const Navbar = () => {
    

    const handleOnClick = () => {
        Swal.fire({
            title: 'Marcas Sponsor',
            imageUrl: 'https://raw.githubusercontent.com/MartinRomero00/Pagina-Js-Coder/main/Styles/images/sponsor.png',
            imageHeight: 220,
        })
    }

  return (
    <nav>
        <ul className="flex justify-around items-center bg-orange-500 text-lg mt-2 h-12 font-rubik">
            <Link to="/">
            <li className="hover:text-white">HOME</li>
            </Link>
            <Link to="/productos">
            <li className="hover:text-white">PRODUCTOS</li>
            </Link>
            <Link to="/preguntas-frecuentes">
            <li className="hover:text-white">AYUDA</li>
            </Link>
            <li onClick={handleOnClick} className="hover:text-white">MARCAS SPONSOR</li>
        </ul>
    </nav>
  )
}

export default Navbar
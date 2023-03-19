import "./styles.css"
import Swal from "sweetalert2"


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
            <li className="hover:text-white">HOME</li>
            <li className="hover:text-white">PRODUCTOS</li>
            <li className="hover:text-white">AYUDA</li>
            <li onClick={handleOnClick} className="hover:text-white">MARCAS SPONSOR</li>
        </ul>
    </nav>
  )
}

export default Navbar
import { AiOutlineShoppingCart } from 'react-icons/ai'
import logo from "../../assets/logo.svg"
import './styles.css'

const Header = () => {
  return (
    <header>
      <ul className='grid grid-cols-3  place-items-center mt-2'>
        <li className='flex justify-center'><img src={logo} alt="logo" width={88}/><h1 className='text-6xl mt-3 ml-1 font-bold text-orange-400 titulo underline decoration-pink-500 font-mono'>Tecno <span className='text-6xl font-bold text-orange-400 '>Facts</span></h1></li>
        <li className='mt-6 col-start-3'><AiOutlineShoppingCart size={50}/><span className='relative left-8 bottom-14 text-xl border-solid border-2 border-orange-500 rounded-full font-mono bg-orange-500 text-white pl-2 pr-2 pb-1 pt-1'><span>0</span></span></li>
      </ul>
    </header>
  )
}

export default Header
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import logo from "../../assets/logo.svg"
import './styles.css'

const Header = () => {
  return (
    <header>
      <ul className='grid grid-cols-3 place-items-center mt-2'>
        <li className='flex justify-center'><img src={logo} alt="logo" width={60}/><h1 className='text-4xl mt-3 ml-1 font-bold text-orange-400 titulo underline decoration-pink-500'>Tecno <span className='text-3xl font-bold text-orange-400 '>Facts</span></h1></li>
        <li className='border border-stone-400 rounded'><input className='w-72 h-10'  type="text" name="" id="" placeholder='Buscador'/><button><BsSearch/></button></li>
        <li className='mt-6'><AiOutlineShoppingCart size={40}/><span className='relative left-8 bottom-14 text-xl border-solid border-2 border-orange-500 rounded-full font-mono bg-orange-500 text-white pl-2 pr-2 pb-1 pt-1'><span>0</span></span></li>
      </ul>
    </header>
  )
}

export default Header
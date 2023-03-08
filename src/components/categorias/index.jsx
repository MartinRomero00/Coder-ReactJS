import { Link } from "react-router-dom"


const Categorys = () => {
  return (
    <div>
        <ul className='list-none grid grid-flow-col place-items-center mt-6 border-2 border-orange-300 mx-6 bg-green-100'>
            <li>
              <Link to='/'>
                <h3>Inicio</h3>
              </Link>
            </li>
            <li>
              <Link to='/lowrate'>
              <h3>Menor Rating</h3>
              </Link>
            </li>
            <li>
            <Link to='/hightrate'>
              <h3>Mayor Rating</h3>
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default Categorys
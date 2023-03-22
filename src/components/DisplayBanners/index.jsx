import Styles from './styles.module.css'
import Banner from "../../assets/Banner.jpg"
import Banner2 from "../../assets/Banner2.jpg"
import Banner3 from "../../assets/Banner3.jpg"
import Productsindex from '../Productsindex'
import { useState } from 'react'
import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai"


const DisplayBanners = () => {

  const img = [Banner, Banner2, Banner3]

  const [imgBanner, setImgBanner] = useState(0)

  const cantidad = img?.length;

  if (!Array.isArray(img) || cantidad === 0) return;

  const nextSlide = () => {
    setImgBanner(imgBanner === cantidad - 1 ? 0 : imgBanner + 1)
  }

  const prevSlide = () => {
    setImgBanner(imgBanner === 0 ? cantidad - 1 : imgBanner - 1)
  }

  return (
    <div>
      <div className={Styles.container}>
      <button onClick={prevSlide}><AiOutlineArrowLeft size={30}/></button>
      {img.map((img, index) => {
        return (
          <div className={imgBanner === index ? `${Styles.slide} ${Styles.active}` : Styles.slide}key={index}>
            {imgBanner === index && (<img src={img} alt="Banner" />)}
          </div>
        )
      }
      )}
      <button onClick={nextSlide}><AiOutlineArrowRight size={30}/></button>
      </div>
      <Productsindex/>
    </div>
  )
}

export default DisplayBanners
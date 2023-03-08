import React from 'react'

const HightRate = ({productos}) => {
    const hightrate = productos.filter((productos) => productos.rating.rate > 3.0)
  return (
    <>
    {hightrate.map((producto) => (
        <ul key={producto.id} className="grid grid-cols-1">
            <div className="border-solid border-2 border-sky-500 gap-4 mx-4 my-2">
                <h4 className="text-center mb-10">{producto.title}</h4>
                <img src={producto.image} alt=""  className="w-36 block m-auto"/>
                <p className="text-center mb-2 mt-4">{producto.description}</p>
                <p className="text-center ">${producto.price}</p>
            </div>
        </ul>
    ))}
</>
  )
}

export default HightRate
import Swal from "sweetalert2"



const PreguntasFrec = () => {

    const handleOnClick = () => {
        Swal.fire({
            title: 'Consulta Enviada',
            text: 'En breve nos pondremos en contacto',
            icon: 'success',
            confirmButtonText: 'Ok'
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset()
    };

  return (
    <div>
        <h1 className='text-center text-3xl font-bold underline'>Preguntas Frecuentes</h1>
        <div className='grid grid-cols-2  justify-items-center items-start gap-7 mt-5 ml-2 mr-2'>
            <details className='w-full  border rounded border-slate-200 bg-stone-50'>
                <summary className='text-center list-none source-sans-pro text-2xl underline decoration-orange-500 decoration-2 underline-offset-4 cursor-pointer'>Realizar un pedido</summary>
                <p className='mt-3 text-center roboto-condensed '>Solo tenés que seleccionar todos los productos que deseas adquirir. Seguidamente, en el carrito de compras, hacés clic en el botón COMPRAR y completás los pasos brindados por el asistente, hasta confirmar la compra.</p>
            </details>
            <details className='w-full  border rounded border-slate-200 bg-stone-50'>
                <summary className='text-center list-none source-sans-pro text-2xl underline decoration-orange-500 decoration-2 underline-offset-4 cursor-pointer bg-stone-50'>¿El precio que figura en la web es el precio final?</summary>
                <p className='mt-3 text-center roboto-condensed '>Todos los precios en la web incluyen el IVA, y se encuentran expresados en pesos argentinos. </p>
            </details>
            <details className='w-full  border rounded border-slate-200 bg-stone-50'>
                <summary className='text-center list-none source-sans-pro text-2xl underline decoration-orange-500 decoration-2 underline-offset-4 cursor-pointer'>¿Cuáles son las formas de pago? </summary>
                <p className='mt-3 text-center roboto-condensed '>Contamos con dos formas de pago: a través de depósito/transferencia bancaria, con la cual obtenés el precio especial, o bien, a través de MercadoPago (Tarjetas online, PagoFácil y RapiPago) con los cuales podés abonar en cuotas, al precio de lista. </p>
            </details>
            <details className='w-full  border rounded border-slate-200 bg-stone-50'>
                <summary className='text-center list-none source-sans-pro text-2xl underline decoration-orange-500 decoration-2 underline-offset-4 cursor-pointer'>¿Cómo abono a través de depósito/transferencia? </summary>
                <p className='mt-3 text-center roboto-condensed '>Una vez se realiza el pedido, te facilitamos los datos del CBU. Debes abonar e informar el pago desde nuestra web, antes de la fecha de vencimiento de la reserva.  </p>
            </details>
            <details className='w-full  border rounded border-slate-200 bg-stone-50'>
                <summary className='text-center list-none source-sans-pro text-2xl underline decoration-orange-500 decoration-2 underline-offset-4 cursor-pointer'>¿Cómo gestiono el envío de mi pedido?  </summary>
                <p className='mt-3 text-center roboto-condensed '>Actualmente realizamos envíos a todo el país través de Oca y Andreani. Tené en cuenta que, para calcular el costo del envío, se toman en consideración tanto las dimensiones y peso del paquete como la distancia de la localidad de entrega.  </p>
            </details>
            <details className='w-full  border rounded border-slate-200 bg-stone-50'>
                <summary className='text-center list-none source-sans-pro text-2xl underline decoration-orange-500 decoration-2 underline-offset-4 cursor-pointer'>¿Cómo tramito la factura de mi compra?</summary>
                <p className='mt-3 text-center roboto-condensed '>En todas las compras efectuadas en la web, brindamos sin excepción alguna, la factura de compra. Una vez que realiza y abona el pedido, enviamos a tu dirección de correo electrónico la factura correspondiente.</p>
            </details>
        </div>
        

    <div className="flex justify-center  flex-col mt-20 border-t-4 border-orange-400">
        <h1 className="text-center text-3xl font-bold underline mt-10 ">Consultas</h1>
        <section className="mt-10 dark:text-gray-100">
            <form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit} >
                <h2 className="w-full text-3xl font-bold leading-tight">Contacto</h2>
                <div>
                    <label for="name" className="block mb-1 ml-1">Nombre</label>
                    <input onSubmit={() => {input=""}} id="name" type="text" placeholder="Tu nombre" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"/>
                </div>
                <div>
                    <label for="email" className="block mb-1 ml-1">Correo</label>
                    <input id="email" type="email" placeholder="Tu correo" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"/>
                </div>
                <div>
                    <label for="message" className="block mb-1 ml-1">Mensaje</label>
                    <textarea id="message" type="text" placeholder="Mensaje..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
                </div>
                <div>
                    <button onClick={handleOnClick} type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900">Enviar</button>
                </div>
            </form>
        </section>
    </div>





    </div>
  )
}

export default PreguntasFrec
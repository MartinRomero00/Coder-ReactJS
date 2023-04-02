import { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import Swal from "sweetalert2"

const ModalCompra = ({ showModal, setShowModal, setEstaAbierto }) => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [correoConfirmacion, setCorreoConfirmacion] = useState("");
    const [correoValido, setCorreoValido] = useState(false);

    const handleEmail1Change = (e) => {
        setCorreo(e.target.value);
        validarCompra(e.target.value, correoConfirmacion);
    };

    const handleEmail2Change = (e) => {
        setCorreoConfirmacion(e.target.value);
        validarCompra(correo, e.target.value);
    };

    const validarCompra = (email1, email2) => {
        if (email1 === email2 && email1 !== "" && email2 !== "") {
            setCorreoValido(true);
        } else {
            setCorreoValido(false);
        }
    };

    const {clear } = useContext(CartContext);

    const handleCompra = () => {
            Swal.fire({
                title: "Compra realizada con éxito!",
                text: "Gracias por su compra",
                icon: "success",
                confirmButtonText: "Aceptar",
            });
            clear();
            setShowModal(false);
            setEstaAbierto(false);
    };

  return (
    <>
      {showModal && (
        <div className="fixed pt-60  inset-0 overflow-y-auto flex items-center justify-center">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <div
        className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
    >
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
            >
                Compra
            </h3>
            <div className="mt-2">
                <div className="mb-2">
                <label
                    htmlFor="nombre"
                    className="block text-gray-700 font-bold mb-2"
                >
                    Nombre
                </label>
                <input
                    type="text"
                    id="nombre"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                </div>
                <div className="mb-2">
                <label
                    htmlFor="apellido"
                    className="block text-gray-700 font-bold mb-2">
                    Apellido
                </label>
                <input
                type="text"
                id="apellido"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />
            </div>
            <div className="mb-2">
            <label
                htmlFor="correo"
                className="block text-gray-700 font-bold mb-2"
            >
                Correo electrónico
            </label>
            <input
                type="email"
                id="correo"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={correo}
                onChange={handleEmail1Change}
            />
            </div>
            <div className="mb-2">
            <label
                htmlFor="correo-confirmacion"
                className="block text-gray-700 font-bold mb-2"
            >
                Confirmar correo electrónico
            </label>
            <input
                type="email"
                id="correo-confirmacion"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={correoConfirmacion}
                onChange={handleEmail2Change}
            />
            {!correoValido && (
                <p className="text-red-500 text-xs italic">
                Los correos electrónicos no coinciden.
                </p>
            )}
            </div>
        </div>
        </div>
    </div>
    </div>
    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
    <button
        onClick={handleCompra}
        type="button"
        className={`inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 text-base leading-6 font-medium text-white shadow-sm focus:outline-none focus:shadow-outline-blue transition ease-in-out duration-150 sm:ml-3 sm:w-auto sm:text-sm sm:leading-5 ${
        correoValido ? "bg-indigo-600 hover:bg-indigo-500" : "bg-gray-400"
        }`}
        disabled={!correoValido}
    >
        Comprar
    </button>
    <button
      type="button"
      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
      onClick={() => setShowModal(false)}
  >
      Cerrar
  </button>
    </div>
    </div>
    </div>
</div>
      )}
    </>
  )
}

export default ModalCompra
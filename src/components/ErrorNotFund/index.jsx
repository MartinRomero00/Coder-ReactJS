import Error404 from "../../assets/404.jpg"

const ErrorNotFund = () => {
  return (
    <div className="grid place-items-center bg-stone-200">
        <img className="mt-4 h-full" src={Error404} alt="Error 404" width={700}/>

    </div>
  )
}

export default ErrorNotFund
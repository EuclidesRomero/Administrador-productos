/* eslint-disable react/prop-types */
const Alert = ({alerta}) => {
  return (
    <div className={`bg-gradient-to-r ${ alerta.error?'from-red-400 to-red-600': 'from-sky-400 to-sky-600'}  w-96 h-7  block mx-auto mt-5 rounded-xl text-center text-white my-10'`}>
        <h1>{alerta.msg}</h1>
    </div>
  )
}

export default Alert

const eliminarAlerta = ({setAlerta }) => {
  return (setTimeout(() => {
    setAlerta({})
  }, 3000)
  )
};

export default eliminarAlerta;

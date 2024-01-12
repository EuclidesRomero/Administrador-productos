import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex justify-between">
        <h1 className="text-4xl text-black font-black">
         Super admin{" "}
          <span
            className="text-blue-400 font"
            style={{ fontFamily: " 'Sevillana', 'cursive' " }}
          >
            Todo lo que necesitas
          </span>
        </h1>
        <div className="flex items-center gap-4">
          <Link to="/crear-producto" className=" font-bold uppercase">
            Crea nuevos productos
          </Link>
          <Link to="/" className=" font-bold uppercase">
            Ir a productos
          </Link>
          <button
            type="button"
            className="text-white text-sm bg-blue-400 mx-5 rounded-md 
                    w-40  text-center "
          >
            {" "}
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

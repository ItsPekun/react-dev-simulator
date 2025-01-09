import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="grid grid-rows-1 md:grid-cols-3 py-4 p-4 bg-gray-700 text-white sm:items-start">
        <Link to={"/"} className="px-4 text-xl font-bold">Dia-3 Tarea</Link>
        <div className="flex flex-col sm:flex-row justify-evenly items-center">
          <Link to={"/tareas"}>Tareas</Link>
          <Link to={"/about"}>Acerca de</Link>
          <button className="grid grid-rows-1 md:grid-cols-1 sm:grid-cols-1 bg-emerald-500 px-2 py-1 rounded-md">
            Registrarse
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;

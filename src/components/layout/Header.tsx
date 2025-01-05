function Header() {
  return (
    <div>
      <header className="grid grid-rows-1 md:grid-cols-3 py-4 p-4 bg-gray-700 text-white items-center sm:items-start">
        <h1 className="px-4 text-xl font-bold">Dia-3 Tarea</h1>
        <div className="flex flex-col sm:flex-row justify-evenly">
          <h1>Inicio</h1>
          <h1>Acerca de</h1>
          <button className="grid grid-rows-1 md:grid-cols-1 sm:grid-cols-1 bg-emerald-500 px-2 py-1 rounded-md">
            Registrarse
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;

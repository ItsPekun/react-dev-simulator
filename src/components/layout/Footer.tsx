function Footer() {
  return (
    <div>
      <footer className="grid grid-cols-1 py-3 bg-gray-800 text-gray-300">
        <div className="flex justify-evenly items-center">
          <div className="grid col-start-1">
            <p>2025 todos los derechos reservados</p>
          </div>
          <div className="grid col-start-2">
            <p>Sobre mi</p>
          </div>
          <div className="grid col-start-3">
            <p>Únete a la comunidad</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

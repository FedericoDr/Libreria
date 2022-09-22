import "./header.css";
import imagenes from "../imagenes/Libreria.svg";

function Header() {
    return (  
        <>

        <header className="head" >
            <img className="imagen" src={imagenes} />
            <div className="contenedor-links">
            <a href="#" className="links" >Inicio</a>
            <a href="#" className="links">Libros</a>
            </div>
        </header>
        </>
    );
}

export default Header;
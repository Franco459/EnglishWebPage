import { Link } from 'react-router-dom';
import eilogo from '../imagenes/EIlogo.png';
import './Navegacioncss.css';
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
const Navegacion = () => {
  return (
    
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a href="/"><img src={eilogo} alt="eilogo" width="32" height="32"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
          </div>
          <form className="form-inline mt-2 mt-md-0 d-flex justify-content-between align-items-center position d-flex">
            <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
          </form>

      </nav>
    </div>
  )
}

export default Navegacion

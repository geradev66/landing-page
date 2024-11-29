import Cart from "./Cart"

const Menu = () => {
  return (
    <div>
        <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Catalogo</a>
                </li>
                </ul>
            <Cart/>
            </div>
        </div>
    </div>
  )
}

export default Menu
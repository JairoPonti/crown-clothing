import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo }  from '../../assets/crown.svg'
import './navigation.styles.scss'


/* USO DE <Fragment /> */ 
// El Fragment es un elemnto que nos sirve de envoltorio, pero no renderiza nada en el HTml, solo lo usamos para devolver todo en un solo contenedor como nos pide React
const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
              < CrownLogo className="logo"/>
            </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                SHOP
            </Link>
            <Link className="nav-link" to="/sign-in">
                SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation;  
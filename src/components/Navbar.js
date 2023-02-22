import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";

const Navbar = () => {

  const { store, actions } = useContext(Context);
  const handleDelete = () => {
    actions.delFavorite();
  };

  return (
    <div>
      <nav className="navbar bg-body-tertiary bg-dark bg-opacity-50">
        <div className="container-fluid justify-content-around">
          <Link className="navbar-brand" to="/">
            <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" className=" d-flex align-items-center" height="80px" alt="StarWars Logo" />
          </Link>
          <div className="dropdown">
            <div className="dropdown-item-text">
              <button className="btn btn-outline-danger btn-floating shadow-sm dropdown-toggle p-2" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                <span className="badge text-bg-secondary">{store.favorite.length}{store.favorite.length === 1 ? "" : ""}</span> Favoritos <i className="bi bi-star"></i>
              </button>
              <ul className="dropdown-menu p-2">
                {store.favorite.length > 0 ? (
                  store.favorite.map((fav, index) => (
                    <ul key={index} className="list-group-item d-flex justify-content-between align-items-center p-1">
                      <li className="dropdown-item-text">{fav}</li>
                      <span>
                        <button type="button" className="btn btn-outline-danger" onClick={handleDelete}><i className="bi bi-trash"></i></button>
                      </span>

                    </ul>
                  ))
                ) : (
                  <li className="dropdown-item" disabled > No Hay favoritos </li>

                )}
              </ul>
            </div>
          </div>
        </div>

      </nav>
    </div>
  )
}
export default Navbar;
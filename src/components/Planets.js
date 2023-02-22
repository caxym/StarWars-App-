import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";

const Chars = (props) => {
    const { store, actions } = useContext(Context);
    const handleSubmit = () => {
        actions.addFavorite(props.title);
    };

    return <div className="">
        <div className="card text-bg-dark">
            <div className="">
                <img src={props.url} className="container-fluid mh-auto" height="350px" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text text-start">Clima: {props.text1}</p>
                    <p className="card-text text-start">Terreno: {props.text2}</p>
                    <p className="card-text text-start">Población: {props.text3}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={"/planetdetail/" + props.id} className="btn btn-secondary shadow-sm" >Leer más...</Link>
                        <button className="btn btn-outline-danger btn-floating shadow-sm" onClick={handleSubmit}><i className="bi bi-star"></i></button>
                    </div>

                </div>
            </div>
        </div>
    </div>
}

const Planets = () => {
    const [planet, setPlanet] = useState([]);
    const getPlanet = () => {
        fetch("https://caxym.github.io/swapimages/planets.json")
            .then((resultado) => resultado.json())
            .then((data) => setPlanet(data))
            .catch((error) => console.log(error));
    }
    useEffect(() => {
        getPlanet();
    }, []);
    return <div className="row row-cols-1 row-cols-md-5 g-4 " >
        {planet.map((plan) => (
            <div key={plan.id}>
                <Chars
                    url={plan.image}
                    title={plan.name}
                    text1={plan.climate}
                    text2={plan.terrain}
                    text3={plan.population}
                    id={plan.id}
                />
            </div>
        ))}


    </div>
}
export default Planets;
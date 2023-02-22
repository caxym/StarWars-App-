import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../store/context";


const Chars = (props) => {
    const { store, actions } = useContext(Context);
    const handleSubmit =()=>{
        actions.addFavorite(props.title);
    };
console.log (store.indice);
console.log (store.favorite);
    return <div>
        <div className="card text-bg-dark">
            <div className="">
                <img src={props.url} className="container-fluid m-auto" height="350px" alt="..." />
                <div className="card-body ">
                    <h5 className="card-title" name={props.title}>{props.title}</h5>
                    <p className="card-text text-start">Especie: {props.text1}</p>
                    <p className="card-text text-start">Genero: {props.text2}</p>
                    <p className="card-text text-start">Mundo Natal: {props.text3}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={"/read/" + props.id} className="btn btn-secondary shadow-sm">Leer más...</Link>
                        <button className="btn btn-outline-danger btn-floating shadow-sm" onClick={handleSubmit}><i className="bi bi-star"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const Characters = () => {
    const [pj, setPj] = useState([]);
    const getPj = () => {
        fetch("https://caxym.github.io/swapimages/chararacters.json")
            .then((resultado) => resultado.json())
            .then((data) => setPj(data))
            .catch((error) => console.log(error));
    }
    useEffect(() => {
        getPj();
    }, []);

    return <div className="row row-cols-1 row-cols-md-5 g-4 " >
        {pj.map((pjs) => (
            <div key={pjs.id}>
                <Chars
                    url={pjs.image}
                    title={pjs.name}
                    text1={pjs.species}
                    text2={pjs.gender}
                    text3={pjs.homeworld}
                    id={pjs.id}

                />
            </div>
        ))}


    </div>
}
export default Characters;
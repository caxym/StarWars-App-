import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";

const Ship = (props) => {
    const {actions } = useContext(Context);
    const handleSubmit =()=>{
        actions.addFavorite(props.title);
    };

    return <div className="">
        <div className="card text-bg-dark">
            <div className="">
                <img src={props.url} className="container-fluid mh-auto"  height="350px" alt="..." /> 
                <div className="card-body ">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text text-start">Modelo: {props.text1}</p>
                    <p className="card-text text-start">Pasajeros: {props.text2}</p>
                    <p className="card-text text-start">Capacidad de Carga: {props.text3}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={"/shipsdetail/"+props.id} className="btn btn-secondary shadow-sm" >Leer más...</Link>
                        <button className="btn btn-outline-danger btn-floating shadow-sm" onClick={handleSubmit}><i className="bi bi-star"></i></button>
                    </div>

                </div>
            </div>
        </div> 
    </div> 
} 
 
const Vehicles = () => { 
    const [ufo, setUfo] = useState([]); 
    const getUfo = () => { 
        fetch("https://caxym.github.io/swapimages/ships.json") 
            .then((result) => result.json()) 
            .then((data) => setUfo(data)) 
            .catch((err) => console.log(err)); 
    } 
    useEffect(() => { 
        getUfo();
    }, [])
    return <div className="  row row-cols-1 row-cols-md-5 g-4">
        {ufo.map((ufos) => (
            <div key={ufos.id}>
            <Ship
                url={ufos.image}
                title={ufos.name}
                text1={ufos.model}
                text2={ufos.passengers}
                text3={ufos.cargo_capacity}
                id={ufos.id}
            />
            </div>
            
        ))}
    </div >


}
export default Vehicles;
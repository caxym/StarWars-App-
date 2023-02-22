import { useParams } from "react-router-dom";
import React, { useState } from "react";

const Read = (props) => {

    return (
        <div className=" text-center text-light d-flex justify-content-center" >
            <h1>{props.id}</h1>
            <div className="card mb-3  w-100 text-bg-dark" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Nombre: {props.title}</h5>
                            <p className="card-text">Diametro: {props.text}</p>
                            <p className="card-text">Gravedad: {props.text1}</p>
                            <p className="card-text">Poblacion: {props.text2}</p>
                            <p className="card-text">Periodo de Rotacion: {props.text3}</p>
                            <p className="card-text">Superficie de agua (%): {props.text4}</p>
                            <p className="card-text">Terrenos: {props.text5}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const Details = () => {
    const [detalle, setDetalle] = useState([]);
    const params = useParams();
    const getDetalle = () => {
        const Url = `https://caxym.github.io/swapimages/id-planet/${params.id}.json`;
      
        fetch(Url)
            .then((response) => response.json())
            .then((data) => setDetalle(data))
            .catch((error) => console.log(error));
    }
    
        getDetalle();
   
    console.log(detalle)
    return  <Read 
        image= {detalle.image}
        title={detalle.name}
        text={detalle.diameter}
        text1={detalle.gravity}
        text2={detalle.population}
        text3={detalle.rotation_period}
        text4={detalle.surface_water}
        text5={detalle.terrain}
        />
    
}

export default Details;
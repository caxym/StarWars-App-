import { useParams } from "react-router-dom";
import React, { useState } from "react";

const Read = (props) => {

    return (
        <div className=" text-center text-light d-flex justify-content-center" >
            <h1>{props.id}</h1>
            <div className="card mb-3  w-75 text-bg-dark">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Nombre: {props.title}</h5>
                            <p className="card-text">Especie: {props.text}</p>
                            <p className="card-text">Genero: {props.text1}</p>
                            <p className="card-text">Altura: {props.text2}</p>
                            <p className="card-text">Peso: {props.text3}</p>
                            <p className="card-text">Lugar de Nacimiento: {props.text4}</p>
                            <p className="card-text">Lugar de Muerte: {props.text5}</p>
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
        const Url = `https://caxym.github.io/swapimages/id-char/${params.id}.json`;
      
        fetch(Url)
            .then((response) => response.json())
            .then((data) => setDetalle(data))
            .catch((error) => console.log(error));
    }
   
        getDetalle();
   

    return  <Read 
        image= {detalle.image}
        title={detalle.name}
        text={detalle.species}
        text1={detalle.gender}
        text2={detalle.height}
        text3={detalle.mass}
        text4={detalle.bornLocation}
        text5={detalle.diedLocation}
        />
    
}

export default Details;
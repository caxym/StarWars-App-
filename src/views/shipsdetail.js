import { useParams } from "react-router-dom";
import React, {  useState } from "react";

const Read = (props) => {

    return (
        <div className=" text-center text-light d-flex justify-content-center " >
            <h1>{props.id}</h1>
            <div className="card mb-3  w-100 text-bg-dark  " >
                <div className="row g-0 d-flex align-items-center">
                    <div className="col-md-4">
                        <img src={props.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 ">
                        <div className="card-body d-flex align-items-center">
                            <h5 className="card-title">Nombre: {props.title}</h5>
                            <p className="card-text">Capacidad de Carga: {props.text}</p>
                            <p className="card-text">Tripulacion: {props.text1}</p>
                            <p className="card-text">Longitud: {props.text2}</p>
                            <p className="card-text">Modelo: {props.text3}</p>
                            <p className="card-text">Clase: {props.text4}</p>
                            <p className="card-text">Precio: {props.text5}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const Detailship = () => {
    const [detalle, setDetalle] = useState([]);
    const params = useParams();
    const getDetalle = () => {
        const Url = `https://caxym.github.io/swapimages/id-ship/${params.id}.json`;
      
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
        text={detalle.cargo_capacity}
        text1={detalle.crew}
        text2={detalle.length}
        text3={detalle.model}
        text4={detalle.starship_class}
        text5={detalle.cost_in_credits}
        />
    
}

export default Detailship;
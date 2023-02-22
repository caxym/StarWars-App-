import { Link } from "react-router-dom";
import Characters from "../components/Characters";
import Vehicles from "../components/Vehicles";
import Planets from "../components/Planets";

const Home = () => {
    return (
        <div className=" text-center text-light ">
           <h1>PERSONAJES</h1>
           <Characters/>
           <h1>VEHICULOS</h1>
           <Vehicles />
           <h1>PLANETAS</h1>
           <Planets />
        </div>
    )
}

export default Home;

import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./views/home";
import Read from './views/read';
import Navbar from './components/Navbar';
import Details from './views/planetdetail';
import Detailship from './views/shipsdetail';
import injectionContext from "./store/context";
const App = () =>  {
  return (
   <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/read/:id" element = {<Read/>}/>
      <Route path = "/planetdetail/:id" element = {<Details/>}/>
      <Route path = "/shipsdetail/:id" element = {<Detailship/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default injectionContext (App);

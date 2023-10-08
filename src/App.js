import './App.css';
import Header from './Header';
import{Route,Routes} from "react-router-dom"
import Home from './home';
import Item from './Item';
import Contect from './Contect';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/cont" element={<Contect/>}/>
        </Routes>
        <Item/>
     
    </div>
  );
}

export default App;

import './App.css';
import Login from './1st Page/Login';
import Food from './2nd Page/Food';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import BC from './3rd Page/BC';
import CB from './3rd Page/CB';
import PTM from './3rd Page/PTM';
import CMP from './3rd Page/CMP';
import PF from './3rd Page/PF';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Login/>}></Route>
          <Route path = '/food' element = {<Food/>}></Route>
          <Route path = '/food/ButterChicken' element = {<BC/>}></Route>
          <Route path = '/food/ChickenBiryani' element = {<CB/>}></Route>
          <Route path = '/food/PaneerTikkaMasala' element = {<PTM/>}></Route>
          <Route path = '/food/ClassicMargheritaPizza' element = {<CMP/>}></Route>
          <Route path = '/food/PrawnsFry' element = {<PF/>}></Route>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { Route} from "react-router-dom";
import Mounting from './Mounting'
import Unmounting from "./Unmounting"
import Updating from "./Updating"



function App() {
  return (
   <>
      
        <Route exact path='/mounting' component={Mounting} />
        <Route path='/unmounting' component={Unmounting} />
        <Route path='/updating' component={Updating} />


       
      <h1> bye</h1>
        </>
  );
}

export default App;

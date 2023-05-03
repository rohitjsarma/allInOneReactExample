//import ClassBasedComp from './component/classBasedComp';
import './App.css';
//import FunctionalComp from './component/functionalComp';
import Employee from './component/reduxExample';
import {store} from "./component/redux/store";
import {Provider} from 'react-redux';

function App() {
  return (
    <div className="App">
    
     <Provider store={store}>
        {/* <ClassBasedComp/>
      <FunctionalComp/> */}
      <Employee/>

    </Provider>
    </div>
  );
}

export default App;

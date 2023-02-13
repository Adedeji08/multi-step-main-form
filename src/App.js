/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 01/02/2023 - 11:41:56
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/02/2023
    * - Author          : 
    * - Modification    : 
**/
import './App.css';
import Payment from './components/Payment';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Header from './components/Header';
// import Plan from './view/Plan/Plan';
// import AddOns from './view/Additional/AddOns';
// import Summary from './view/Summary/Summary';
// import Final from './view/allviews/Final';


function App() {
  return (
    <Provider store={store}>
    <div className='App1'>
      <div className="App">
       <Payment />
       
       {/* <Header /> */}
      </div>
     
    </div>
    </Provider>
  );
}

export default App;

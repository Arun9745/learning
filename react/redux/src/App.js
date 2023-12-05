
import './App.css';
import Customer from './components/Customer';
import CustomerView from './components/CustomerView';
import { Provider } from 'react-redux';
import { Store } from './store ';

function App() {
  return(
    <Provider store={Store}>
      <div className="App">
      <h1>React Redux Customer Example</h1>
      <Customer />
      <CustomerView />
    </div>
    </Provider>
  );
} 

export default App;

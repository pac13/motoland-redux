import './Styles/App.scss';
import Navbar from './components/NavBar/Navbar';
import CrudApi from './components/Main';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <Navbar />
        <CrudApi />
      </div>
    </Provider>
  );
}

export default App;

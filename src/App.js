import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import { Provider } from 'react-redux';

import store from './redux/store';
import { Dashboard } from './pages/Dashboard';
import NavBar from './components/NavBar';
function App() {
  return (
  <>
  <Provider store={store}>
  <BrowserRouter>
  <NavBar/>
  <Routes> 
    <Route path='/' element={<Dashboard/>}/>
  <Route path='/register' element={<Register />} />
  <Route path='/login' element={<Login />} />

  </Routes>
  
  </BrowserRouter>
  </Provider>

  
  </>
  );
}

export default App;

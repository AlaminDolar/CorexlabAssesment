import logo from './logo.svg';
import './App.css';
import Header from './components/Pages/Shared/Header';
import SiedeBar from './components/Pages/Shared/SiedeBar';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/Pages/MainPage/MainPage';



function App() {
  return (
    <div className="App">
<Header></Header>
<Routes>
  
  <Route path='' element={<SiedeBar></SiedeBar>} >
    <Route index element={<MainPage></MainPage>}></Route>
  </Route>

</Routes>
    </div>
  );
}

export default App;

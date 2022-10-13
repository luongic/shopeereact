import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './App.css';
import './style/base.css'
import './style/main.css'
import './style/grid.css'
import './style/responsive.css'

import Appbody from './containers/Appbody';
import Header from './containers/Header';
import Login from './containers/Login';
import Productdetail from './containers/Productdetail'
import Footer from './containers/Footer';
import { useEffect, useState } from 'react';

function App() {


  const user = useSelector((state) => state.user.user)

  const [isLoged, setIsloged] = useState(false)

  useEffect(()=>{
    if(user.length === 0){
      setIsloged(false)
    }
    else{
      setIsloged(true)
    }
  }, [user])
  

  return (
    <div className="App">
        <BrowserRouter>

          <Header isLogin={isLoged} />

          <Routes>
            <Route path='/' element={<Appbody />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product/:productId' element={<Productdetail />} />
            <Route>404 Not Found</Route>
          </Routes>

          <Footer />

        </BrowserRouter>
    </div>
  );
}

export default App;

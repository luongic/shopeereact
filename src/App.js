
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import './App.css';
import './style/base.css'
import './style/main.css'
import './style/grid.css'
import './style/responsive.css'

import Appbody from './containers/Appbody';
import Header from './containers/Header';
import Productdetail from './containers/Productdetail'
import Footer from './containers/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>

          <Header />


            <Routes>
              <Route path='/' element={<Appbody />} />
              <Route path='/product/:productId' element={<Productdetail />} />
              <Route>404 Not Found</Route>
            </Routes>


          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;

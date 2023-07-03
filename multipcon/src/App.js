import './App.css';
import AppHeader from './components/header/Appheader'

import Footer from './components/footer/Footer';
import {  Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';



function App() {
  return (
    <>
    
       <AppHeader/>
     
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/Home' element={<Navigate exact to={'/'}/>}/>

      <Route path='/404' element={<Page404/>}/>
      <Route path='*' element={<Navigate to={'/404'}/>} />
    </Routes>

    <Footer/>
    </>
    
  );
}

export default App;

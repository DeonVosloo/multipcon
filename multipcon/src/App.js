import './App.css';
import AppHeader from './components/header/Appheader'
import Introduction from './components/introduction/Introduction';
import ExperiencesGrid from './components/experiences/Experiencesgrid';
import Footer from './components/footer/Footer';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';



function App() {
  return (
    <>
    
       <AppHeader/>
     
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/404' element={<Page404/>}/>

    </Routes>

    <Footer/>
    </>
    
  );
}

export default App;

import './App.css';
import AppHeader from './components/header/Appheader'

import Footer from './components/footer/Footer';

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

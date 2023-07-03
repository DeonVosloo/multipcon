import './App.css';
import AppHeader from './components/header/Appheader'

import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App" id="Home">
      <AppHeader/>

      <div id="About">
        <Introduction/>
      </div>
      
      <div id="Work">
        <ExperiencesGrid/>
      </div>

    <Footer/>
    </>
    
  );
}

export default App;

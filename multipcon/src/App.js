import './App.css';
import AppHeader from './components/header/Appheader'
import Introduction from './components/introduction/Introduction';
import ExperiencesGrid from './components/experiences/Experiencesgrid';
import Footer from './components/footer/Footer';
import ConstructionIcon from '@mui/icons-material/Construction';
import Typography from '@mui/material/Typography'

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
      <ConstructionIcon sx={{fontSize: 72}}/><Typography variant="h1" color="initial">This website is still under construction</Typography><ConstructionIcon sx={{fontSize: 72}}/>

      <Footer/>
      
    </div>
  );
}

export default App;

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
      <ConstructionIcon sx={{fontSize: 72}}/><Typography variant="h1" color="initial">This website is still under construction and is not near completed </Typography><ConstructionIcon sx={{fontSize: 72}}/>
      <div id="Work">
        <ExperiencesGrid/>
      </div>

      <Footer/>
      
    </div>
  );
}

export default App;

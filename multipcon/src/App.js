import './App.css';
import AppHeader from './components/header/Appheader'
import Introduction from './components/introduction/Introduction';
import ExperiencesGrid from './components/experiences/Experiencesgrid';
import Footer from './components/footer/Footer';
import ConstructionIcon from '@mui/icons-material/Construction';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

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
      <Grid lg={11.5} md={11.5} xs={11.5} >
      <ConstructionIcon sx={{fontSize: 44}}/><Typography variant="h4" color="initial">This website is under construction</Typography><ConstructionIcon sx={{fontSize: 44}}/>
      </Grid>
      

      <Footer/>
      
    </div>
  );
}

export default App;

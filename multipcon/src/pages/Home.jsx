import * as React from 'react';
import Introduction from '../components/introduction/Introduction';
import Experiences from '../components/experiences/Experiences';
import Appheader from '../components/header/Appheader';
import Footer from '../components/footer/Footer';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Grid, Typography } from '@mui/material';

function Home() {
    return (
      <>

      <div id="About">
        <Introduction/>
      </div>
      
      <div id="Work">
        <Experiences/>
      </div>
      <Grid xl={12}><Typography><ConstructionIcon sx={{fontSize: 40}}/> This site is under construction <ConstructionIcon sx={{fontSize: 40}}/></Typography></Grid>

      </>
     
    )
  }
  
  export default Home
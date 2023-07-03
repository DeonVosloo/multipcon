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
      <ConstructionIcon sx={{fontSize: 44}}/><Typography variant="h4" color="initial">This website is under construction</Typography><ConstructionIcon sx={{fontSize: 44}}/>

      </>
     
    )
  }
  
  export default Home
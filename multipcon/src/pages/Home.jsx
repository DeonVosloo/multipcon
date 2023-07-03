import * as React from 'react';
import Introduction from '../components/introduction/Introduction';
import Experiences from '../components/experiences/Experiences';
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
      <Grid lg={11.5} md={11.5} xs={11.5} sx={{display: 'flex', justifyContent: 'center'}}>
        <ConstructionIcon sx={{fontSize: 44, alignSelf: 'center'}}/><Typography variant="h4" color="initial" sx={{alignSelf: 'center'}}>This website is under construction</Typography><ConstructionIcon sx={{fontSize: 44, alignSelf: 'center'}}/>
      </Grid>
      

      </>
     
    )
  }
  
  export default Home
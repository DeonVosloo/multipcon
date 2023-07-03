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
      <Grid xl={12}>
        <ConstructionIcon sx={{fontSize: 44, alignSelf: 'center'}}/><Typography variant="h4" color="initial" sx={{alignSelf: 'center'}}>This website is under construction</Typography><ConstructionIcon sx={{fontSize: 44, alignSelf: 'center'}}/>
      </Grid>
      

      </>
     
    )
  }
  
  export default Home
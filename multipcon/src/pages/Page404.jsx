import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import ConstructionIcon from '@mui/icons-material/Construction';

function Page404() {
    return (
      <>

      <Box sx={{ flexGrow: 0, backgroundColor: 'transparent', }}>
      <Grid container spacing={2} sx={{ justifyContent: "center"}}>
        <Grid item xs={12} sm={12}  md={11} lg={12}>
          
            <Typography typeof='h1' sx={{fontFamily: `Ubuntu, sans-serif`, fontSize: {xl:82,lg: 72, md:60, xs:48}, color: 'black', textAlign: 'center'}}>
            <ConstructionIcon sx={{ fontSize: {xs: 40, md: 50, lg:60, xl:70}}}/>404: Page not found<ConstructionIcon sx={{ fontSize: {xs: 40, md: 50, lg:60, xl:70}}}/>
            </Typography>
            
        </Grid>
        <Grid item xs={11.5} sm={12}  md={11} lg={12}>
            <Typography typeof='p' sx={{fontFamily: `Ubuntu, sans-serif`, color: 'black', textAlign: 'center'}}>
                Either this page does not exist or is currently under maintance or construction
            </Typography>
        </Grid>
      </Grid> 
    </Box>

      </>
     
    )
  }
  
  export default Page404
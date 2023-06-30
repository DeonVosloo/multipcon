import { Box, Card, CardActionArea, CardMedia, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import Image404 from '../images/404.svg';

function Page404() {
    return (
      <>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{display: "flex", justifyContent: "center"}}>
        <Grid item xs={12} sm={11.5}  md={11} lg={9.5}>
            <Typography typeof='h1' sx={{fontFamily: `Ubuntu, sans-serif`, fontSize: {xl:82,lg: 72, md:60, xs:48}, color: 'black', textAlign: 'center'}}>
                Page not found
            </Typography>
        </Grid>
      <Grid item xs={12} sm={11.5}  md={11} lg={8}> 
      <Box sx={{backgroundColor: 'transparent', alignSelf: 'center', alignItems: 'center'}}>
                <Container alignSelf='center' alignItems='center'>
                  <img alt='404 logo' src={Image404} sx={{ margin: {md:'5%', lg: '8%', xl: '10%', xs: 0 }}} />
                </Container>
            </Box> 
        </Grid>

        

      </Grid>

      
    </Box>

      </>
     
    )
  }
  
  export default Page404
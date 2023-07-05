import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import BannerImage from '../../images/banner.svg';

function Banner() {
  return (
    <Container maxWidth="5500" sx={{backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",
    backgroundImage: `url(${BannerImage})`, height: {xl: '130%', xs: '130%', md:'130%', lg: '130%' }, border: {lg: 0, sm:0, md:0},
     borderRadius: {lg:5, md:5, sm:5, xs:0} }} >
        <Box component="div">
    <Grid>
      <Grid item md={12}>
        <Typography component="h1" variant="h5" color="white" gutterBottom sx={{textAlign: "start", paddingLeft: "4%", paddingTop: "4%", fontFamily: `Ubuntu, sans-serif`, 
        fontSize: {xl: 80, md: 55, xs: 32} , color: 'black'}}>
          Multi Paint & Construction
        </Typography>
      </Grid>
      <Grid item md={9} xs={7}>
        <Typography component="h1" variant="h5" color="white" gutterBottom sx={{textAlign: "center", paddingTop: "4%", fontFamily: `Ubuntu, sans-serif`,
        fontSize: {xl: 55, md: 40, xs: 24}, color: 'black'}}>
         Welcome to our website
        </Typography>
      </Grid>
    </Grid>
        </Box>
      </Container>

  )
}

export default Banner




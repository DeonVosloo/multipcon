import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import BannerImagePNG from '../../images/banner.png';
import BannerImageSVG from '../../images/banner.svg';

function Banner() {
  return (
      <Container maxWidth="5500" sx={{backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",
    backgroundImage: `url(${BannerImagePNG})`, height: {xl: 450, xs: 250, md:300, lg: 350 }, border: 'solid', borderRadius: 0.2, borderColor: 'grey.600' }} >
        <Box component="div">
    <Grid>
      <Grid item md={12}>
        <Typography component="h1" variant="h5" color="white" gutterBottom sx={{textAlign: "start", paddingLeft: "4%", paddingTop: "4%", fontFamily: `Ubuntu, sans-serif`, 
        fontSize: {xl: 50, md: 40, xs: 24} , color: 'black'}}>
          Multi Paint & Construction
        </Typography>
      </Grid>
      <Grid item md={8}>
        <Typography component="h1" variant="h5" color="white" gutterBottom sx={{textAlign: "center", paddingTop: "4%", fontFamily: `Ubuntu, sans-serif`,
        fontSize: {xl: 50, md: 40, xs: 24}, color: 'black'}}>
         Welcome to our website
        </Typography>
      </Grid>
    </Grid>
        </Box>
      </Container>

  )
}

export default Banner




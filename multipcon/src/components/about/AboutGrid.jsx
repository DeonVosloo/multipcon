import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import Banner from '../introduction/Banner';
import AboutBanner from './AboutBanner';

export default function AboutGrid() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{display: "flex", justifyContent: "center", marginTop: "4%"}}>
          <Grid item xs={12} sm={11.5}  md={11} lg={10}> 
            <AboutBanner/>
          </Grid>
          <Grid item xs={12} sm={11.5} md={10.5} lg={8} sx={{marginTop: "6%"}} >
          <Typography component="h1" variant="h5" color="white" gutterBottom sx={{textAlign: "flex-start", paddingLeft: "4%", paddingTop: "4%", fontFamily: `Ubuntu, sans-serif`, 
        fontSize: {xl: 80, md: 55, xs: 32} , color: 'white'}}>
          What we specialise in
        </Typography>
          </Grid>
          <Grid item xs={12} sm={11.5} md={10.5} lg={8} sx={{marginTop: "6%"}} >
          
          </Grid>
        </Grid>
      </Box>
    );
  }
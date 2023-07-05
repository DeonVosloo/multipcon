import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import AboutBanner from './AboutBanner';
import Description from './Description';
import WorkWeDo from './WorkWeDo';
import Waterproofing from './workWeDo/Waterproofing';

export default function AboutGrid() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{display: "flex", justifyContent: "center", marginTop: "4%"}}>
          <Grid item xs={12} sm={11.5}  md={11} lg={10}> 
            <AboutBanner/>
          </Grid>
          <Grid item xs={11.} sm={11.5}  md={11} lg={10} sx={{marginTop: "6%"}}> 
            <Description/>
          </Grid>
          <Grid item xs={12} sm={11.5} md={10.5} lg={8} sx={{marginTop: "6%"}} >
          <Typography variant="h5" color="white" gutterBottom sx={{textAlign: "flex-start", paddingLeft: "4%", paddingTop: "4%", fontFamily: `Ubuntu, sans-serif`, 
        fontSize: {xl: 80, md: 55, xs: 32} , color: 'white'}}>
          We specialise in the following
        </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{marginTop: "6%"}} >
            <WorkWeDo/>
          </Grid>
        </Grid>
      </Box>
    );
  }
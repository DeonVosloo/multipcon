import { Box, Grid } from '@mui/material'
import React from 'react'
import Waterproofing from './workWeDo/Waterproofing'
import DampProofing from './workWeDo/DampProofing'
import Painting from './workWeDo/Painting'
import RoofPainting from './workWeDo/RoofPainting'
import Tiling from './workWeDo/Tiling'
import BathroomRenovations from './workWeDo/BathroomRenovations'
import PoolAndPumpRepairs from './workWeDo/PoolAndPumpRepairs'
import Paving from './workWeDo/Paving'

export default function WorkWeDo() {
  return (
    <>
    <Box sx={{ marginTop: "4%", flexGrow:0, backgroundColor: '#262626'}}>
        <Grid container spacing={0} >
            <Grid item xs={12} sm={12} md={12} lg={12} >
              <Waterproofing/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} >
              <DampProofing/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} >
              <Painting/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} >
              <RoofPainting/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} >
              <Tiling/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} >
              <BathroomRenovations/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} >
              <PoolAndPumpRepairs/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} >
              <Paving/>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}

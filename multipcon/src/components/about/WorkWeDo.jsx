import { Box, Grid } from '@mui/material'
import React from 'react'
import Waterproofing from './workWeDo/Waterproofing'
import DampProofing from './workWeDo/DampProofing'

export default function WorkWeDo() {
  return (
    <>
    <Box sx={{ marginTop: "4%", flexGrow:0}}>
        <Grid container spacing={0} >
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{marginTop: "3%"}} >
              <Waterproofing/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} >
              <DampProofing/>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}

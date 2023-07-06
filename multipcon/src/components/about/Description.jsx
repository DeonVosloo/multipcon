import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function Description() {
  return (
    <Grid lg={12} md={12} xs={12} sx={{marginTop: {xl: '0%', lg:'1%', md:'2%', xs:'4%'}}}>
        <Typography typeof='p' sx={{textAlign: "flex-start", fontFamily: `Ubuntu, sans-serif`, 
          fontSize: {xl: 28, lg:24, md: 21, xs: 15} , color: 'white'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography typeof='p' sx={{textAlign: "flex-start", fontFamily: `Ubuntu, sans-serif`, 
          fontSize: {xl: 28, lg:24, md: 21, xs: 15} , color: 'white', marginTop: '3%'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
    </Grid>
  )
}

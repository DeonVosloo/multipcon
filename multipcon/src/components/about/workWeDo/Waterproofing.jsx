import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import WaterproofingImage from '../../../images/waterproofing.jpg'

export default function Waterproofing() {
  return (
    <Box sx={{ flexGrow: 0}}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={5} lg={5} xl={5} justifyContent={'start'} display={'flex'}>
          <Container  sx={{backgroundImage:`url(${WaterproofingImage})`,
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',
            height: '55.4vh', width: '100%'
          }}/> 
            
        </Grid>
        <Grid item xs={12} md={7} lg={7} xl={7} justifyContent={'center'}>
          <Box sx={{backgroundColor: '#262626',paddingBottom: '4%'}} height={'50.7vh'}>
          <Box>
            <Typography paragraph='true' variant='h1' sx={{textAlign: 'center', 
              fontSize: {xl: 32, lg: 30, md: 28, sm: 24, xs: 20}, 
              paddingTop: '2%',
              color: '#FFC107'
            }}>
                WATERPROOFING
            </Typography>
          </Box>
          <Box sx={{ overflow: 'auto', paddingBottom: '5%'}} height={'40vh'}> 
            <Typography paragraph='true' sx={{textAlign: 'flex-start', 
              fontSize: {xl: 20, lg: 18, md: 16, sm: 14, xs: 12}, 
              paddingLeft: {xs:'2%', sm:'2%', md:'4%', lg:'6%', xl:'6%'},
              paddingTop: '2%',
              paddingRight: {xs:'2%', sm:'2%', md:'3%', lg:'5%', xl:'5%'},
              color: 'whitesmoke'
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography paragraph='true' sx={{textAlign: 'flex-start', 
              fontSize: {xl: 20, lg: 18, md: 16, sm: 14, xs: 12}, 
              paddingLeft: {xs:'2%', sm:'2%', md:'4%', lg:'6%', xl:'6%'},
              paddingTop: '2%',
              paddingRight: {xs:'2%', sm:'2%', md:'3%', lg:'5%', xl:'5%'},
              color: 'whitesmoke'
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>  
  )
}
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MultipconLogo from '../../images/multipcon.svg';
import CustomLinks from '../customlinks/CustomLinks';
import { Link, Navigate } from 'react-router-dom';

const pages = ['Home', 'About', 'Work', 'Contact Us'];

const Appheader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="sticky" sx={{bgcolor:"#1a1a1c"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Link to='/'>
        <Avatar alt="Multi Paint & Construction" src={MultipconLogo} element={<Navigate exact to={'/'}/>}  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
        </Link>
        <Link to='/' style={{textDecoration: 'none'}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: `Ubuntu, sans-serif`,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Multi Paint & Construction
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                textTransform: "none"
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{fontFamily: `Ubuntu, sans-serif`}}>
                  <Typography textAlign="center" sx={{fontFamily: `Ubuntu, sans-serif`, textTransform: "none"}}><CustomLinks pageValue={page} CustomColorValue="black" /></Typography>
    
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar alt="Multi Paint & Construction" src={MultipconLogo}  sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: `Ubuntu, sans-serif`,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Multipcon
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <CustomLinks pageValue={page} CustomColorValue={"white"}/>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Appheader;

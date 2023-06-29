import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import { Typography } from '@mui/material';
import { useState } from "react";
import ConstructionIcon from '@mui/icons-material/Construction';
import PaintingIcon from '@mui/icons-material/FormatPaintTwoTone';
import WaterProofingIcon from '@mui/icons-material/WaterDamageTwoTone';

export default function ExperiencesButtonGrid() {


  let experiencesData = [
    {
      id: "1",
      title: "Waterproofing",
      firstText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
      "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      secondText: "Find more out more in the about us page"
    },
    {
      id: "2",
      title: "Damp Proofing",
      firstText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
      "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      secondText: "Find more out more in the about us page"
    },
    {
      id: "3",
      title: "Painting",
      firstText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
      "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      secondText: "Find more out more in the about us page"
    },
    {
      id: "4",
      title: "Roof Painting",
      firstText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
      "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      secondText: "Find more out more in the about us page"
    },
    {
      id: "5",
      title: "Tiling",
      firstText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
      "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      secondText: "Find more out more in the about us page"
    },
    {
      id: "6",
      title: "Bathroom Renovations",
      firstText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
      "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      secondText: "Find more out more in the about us page"
    },
    {
      id: "7",
      title: "Pool & Pump Repairs",
      firstText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
      "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      secondText: "Find more out more in the about us page"
    },
    {
      id: "8",
      title: "Paving",
      firstText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
      " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " +
      "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
      "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      secondText: "Find more out more in the about us page"
    }]

  const [active, setActive] = useState("");

  let StartActive = () =>
  {
    if(active !== "1" && active !== "2" && active !== "3" && active !== "4" && active !== "5" && active !== "6" && active !== "7" && active !== "8" )
    {
      setActive("1");
    }
  }

 StartActive();

  const handleClick = (event) => 
  {
    setActive(event.target.id);

  }

  let CheckIfActiveIsValid = (act) =>
  {
    if (act === "1") 
      return true;
    else  if (act === "2") 
      return true;
    else  if (act === "3") 
      return true;
    else  if (act === "4") 
      return true;
    else  if (act === "5") 
      return true;
    else  if (act === "6") 
      return true;
    else  if (act === "7") 
      return true;
    else  if (act === "8") 
      return true;
    else
    return false;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{display: "flex", justifyContent: "center", textAlign: "start"}}>
        <Grid item xs={11.5} md={5} lg={5} container spacing={2} >
            <Grid item xs={12} md={9} lg={8}>
                <Button id={"1"} variant={active === "1" ? "contained" : "text"} startIcon={<WaterProofingIcon/>} fullWidth= "true" sx={{
                  color: "white", display: "flex", justifyContent: "start", fontFamily: `Ubuntu, sans-serif`
                  , bgcolor: active === "1" ? "#1a1a1c": "transparent"}} onClick={handleClick}>
                  Waterproofing
                </Button>      
            </Grid>

            <Grid item xs={12} md={9} lg={8}>
              <Button id={"2"} variant={active === "2" ? "contained" : "text"} startIcon={<WaterProofingIcon/>} fullWidth= "true" sx={{
                color: "white", display: "flex", justifyContent: "start", fontFamily: `Ubuntu, sans-serif`,
                bgcolor: active === "2" ? "#1a1a1c": "transparent"}} onClick={handleClick}>
                Damp proofing
              </Button>
            </Grid>

            <Grid item xs={12} md={9} lg={8}>
              <Button id={"3"} variant={active === "3" ? "contained" : "text"}  startIcon={<PaintingIcon/>} fullWidth= "true" sx={{
                color: "white", display: "flex", justifyContent: "start", fontFamily: `Ubuntu, sans-serif`, textAlign: "start"
                , bgcolor: active === "3" ? "#1a1a1c": "transparent"}} onClick={handleClick}>
                Painting
              </Button>
            </Grid>

            <Grid item xs={12} md={9} lg={8}>
              <Button id={"4"} variant={active === "4" ? "contained" : "text"}  startIcon={<PaintingIcon/>} fullWidth= "true" sx={{
                color: "white", display: "flex", justifyContent: "start", fontFamily: `Ubuntu, sans-serif`, textAlign: "start"
                , bgcolor: active === "4" ? "#1a1a1c": "transparent"}} onClick={handleClick}>
                Roof painting
              </Button>
            </Grid>
            <Grid item xs={12} md={9} lg={8}>
              <Button id={"5"} variant={active === "5" ? "contained" : "text"}  startIcon={<ConstructionIcon/>} fullWidth= "true" sx={{
                color: "white", display: "flex", justifyContent: "start", fontFamily: `Ubuntu, sans-serif`, textAlign: "start"
                , bgcolor: active === "5" ? "#1a1a1c": "transparent"}} onClick={handleClick}>
                Tiling
              </Button>
            </Grid>
            <Grid item xs={12} md={9} lg={8}>
              <Button id={"6"} variant={active === "6" ? "contained" : "text"}  startIcon={<ConstructionIcon/>} fullWidth= "true" sx={{
                color: "white", display: "flex", justifyContent: "start", fontFamily: `Ubuntu, sans-serif`, textAlign: "start"
                , bgcolor: active === "6" ? "#1a1a1c": "transparent"}} onClick={handleClick}>
                Bathroom renovations
              </Button>
            </Grid>
            <Grid item xs={12} md={9} lg={8}>
              <Button id={"7"} variant={active === "7" ? "contained" : "text"}  startIcon={<ConstructionIcon/>} fullWidth= "true" sx={{
                color: "white", display: "flex", justifyContent: "start", fontFamily: `Ubuntu, sans-serif`, textAlign: "start"
                , bgcolor: active === "7" ? "#1a1a1c": "transparent"}} onClick={handleClick}>
                Pool & pump repairs
              </Button>
            </Grid>
            <Grid item xs={12} md={9} lg={8}>
              <Button id={"8"} variant={active === "8" ? "contained" : "text"}  startIcon={<ConstructionIcon/>} fullWidth= "true" sx={{
                color: "white", display: "flex", justifyContent: "start", fontFamily: `Ubuntu, sans-serif`, textAlign: "start"
                , bgcolor: active === "8" ? "#1a1a1c": "transparent"}} onClick={handleClick}>
                Paving
              </Button>
            </Grid>
        </Grid>
        <Grid item xs={11.5} md={7} lg={7} container spacing={0}>
        <Box>
          <Grid item xs={12} md={9} lg={8} container spacing={1} >

            <Grid item xs={12} md={9} lg={8}>        
              <Typography variant="p" color="white" sx={{fontFamily: `Ubuntu, sans-serif`, color: "#1a1a1c"}}>
                {experiencesData[CheckIfActiveIsValid(active) ? active -1 : 0].title}  
              </Typography> <br/>
            </Grid>

            <Grid item xs={12} md={9} lg={8}>        
              <Typography variant="p" color="white" sx={{fontFamily: `Ubuntu, sans-serif`, color: "#007aff"}}> 
              </Typography>
            </Grid>
            
          </Grid>

          <Grid item xs={12} md={9} lg={8}>
            <Typography variant="p" color="white" sx={{fontFamily: `Ubuntu, sans-serif`, color: "black"}}>
              {experiencesData[CheckIfActiveIsValid(active) ? active -1 : 0].firstText}  
            </Typography>
            <Typography variant="p" color="white" sx={{fontFamily: `Ubuntu, sans-serif`, color: "blue"}}>
              {experiencesData[CheckIfActiveIsValid(active) ? active -1 : 0].secondText}  
            </Typography>
            
          </Grid>

        </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

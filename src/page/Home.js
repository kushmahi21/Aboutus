import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


const Home = () => {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Box sx={{  marginTop: 20 }} >
          <Grid container spacing={2} style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
            <Grid item md={6}>
              <Typography  variant="h4" component="h1">
              Welcome to world of VK <br/>
              <Typography  style={{  fontSize: 20, marginTop: 15 }}>
              We're a team of talented developers that can help your
              business grow!
              </Typography>  
              </Typography>
            </Grid>
            <Grid item md={6}>
              <img src="./Pictures/img2.png" style={{height: 'auto' , width: '400px'}}/>
            </Grid>
          </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
};
export default Home;

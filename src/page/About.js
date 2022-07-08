import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Wave from "react-wavify";

const About = () => {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Box sx={{ marginTop: 0 }}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <video width="100%" height="auto" autoPlay muted loop>
                <source src="./video/video.mp4" type="video/mp4" />
              </video>
              <Wave fill="url(#gradient)" fill="#fcf8ec" style={{marginTop: -60}}>
                <defs>
                  <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0" stopColor="#d4af37" />
                    <stop offset="0.5" stopColor="#f00" />
                  </linearGradient>
                  <mask id="mask">
                    <rect
                      x="0"
                      y="0"
                      width="2000"
                      height="200"
                      fill="url(#gradient)"
                    />
                  </mask>
                </defs>
              </Wave>
            </Grid>
            <Grid
              sx={{
                background: "#fcf8ec",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
                marginTop: -10
              }}
              item
              md={12}
            >
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "3.125rem",
                  lineHeight: 1.3,
                }}
              >
                Our Story
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.125rem",
                  lineHeight: 1.5,
                  fontWeight: 600,
                  color: "#0e2d68",
                  maxWidth: 500,
                }}
              >
                We not only make the world’s most comfortable hammocks, but
                through training and sustainable job creation, we empower our
                weavers and their families to break the cycle of poverty and
                build a brighter future.
              </Typography>
            </Grid>

            <Grid
              items
              md={6}
              sx={{
                background: "#fcf8ec",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  lineHeight: 1.3,
                  color: "#0e2d68",
                  margin: "0 0 1.5rem",
                }}
              >
                The journey to relaxation.
              </Typography>
              <Typography sx={{ maxWidth: 500 }}>
                Finding a hammock you can truly relax in didn’t happen
                overnight. It started with a chance discovery while on vacation,
                and took a lot of hard work (and a lot of hanging around) to
                bring the softest, most comfortable, and thoughtfully crafted
                hammocks to your backyard.
              </Typography>
            </Grid>
            <Grid
              items
              md={6}
              sx={{
                background: "#fcf8ec",
                paddingTop: 5,
                flexDirection: "column",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="./Pictures/img1.png"
                style={{ height: "auto", width: "400px" }}
              />
            </Grid>

            <Grid
              items
              md={6}
              sx={{
                background: "#fcf8ec",
                paddingTop: 5,
                flexDirection: "column",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="./Pictures/img3.png"
                style={{ height: "auto", width: "400px" }}
              />
            </Grid>
            <Grid
              items
              md={6}
              sx={{
                background: "#fcf8ec",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  lineHeight: 1.3,
                  color: "#0e2d68",
                  margin: "0 0 1.5rem",
                }}
              >
                Transforming communities.
              </Typography>
              <Typography sx={{ maxWidth: 500 }}>
                Each individual Yellow Leaf hammock is handwoven with the utmost
                precision and care by the expert craftswomen of the Mlabri Tribe
                – “the people of the yellow leaves” – in the hills of Northern
                Thailand. Across three weaving communities, we are working to
                create jobs for mothers and build a foundation for positive
                community transformation.
              </Typography>
            </Grid>
            <Grid
              items
              md={12}
              sx={{
                background: "#fcf8ec",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2.1875rem",
                  lineHeight: 1.3,
                  maxWidth: 800,
                  padding: 10,
                  fontWeight: 600,
                  color: "#129169",
                }}
              >
                Turning women into breadwinners not only builds self-esteem, but
                improves their standing in the community and enables them to
                pool resources and improve infrastructure.
              </Typography>
            </Grid>
            <Grid
              items
              md={6}
              sx={{
                background: "#fcf8ec",
                padding: 5,
                flexDirection: "column",
                justifyContent: "flex-end",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <img
                src="./Pictures/img5.png"
                style={{ height: "auto", width: "600px" }}
              />
            </Grid>
            <Grid
              items
              md={6}
              sx={{
                background: "#fcf8ec",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.625rem",
                  lineHeight: 1.2,
                  fontWeight: 600,
                  color: "#0e2d68",
                  margin: "0 0 1.5rem",
                  textAlign: "left",
                }}
              >
                How we got here.
              </Typography>
              <Typography sx={{ maxWidth: 500, color: "#0e2d68" }}>
                In 2011, while on vacation in Thailand, our co-founder Joe
                embarked on an impromptu motorcycle adventure that led him to
                discover the world’s most comfortable hammock hanging outside a
                hut on a tiny island.
              </Typography>
            </Grid>
            <Grid
              items
              md={12}
              sx={{
                background: "#fcf8ec",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2.1875rem",
                  lineHeight: 1.3,
                  maxWidth: 800,
                  padding: 10,
                  fontWeight: 600,
                  color: "#129169",
                }}
              >
                The hammocks were unlike anything Joe had ever seen or felt
                before, and he knew he had to share them with the world.
              </Typography>
            </Grid>
            <Grid
              items
              md={6}
              sx={{
                background: "#fcf8ec",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2rem",
                  lineHeight: 1.3,
                  color: "#0e2d68",
                  margin: "0 0 1.5rem",
                }}
              >
                Bringing it home.
              </Typography>
              <Typography sx={{ maxWidth: 500 }}>
                He bought as many as he could fit in his backpack and headed
                home, ready to turn his vacation dream into a reality. Joe
                teamed up with his now-wife Rachel to establish Yellow
                Leaf—bringing a curated collection of beautifully crafted,
                ultra-comfortable hammocks to the masses, while giving back to
                the original crafters of the world’s most comfortable hammocks.
              </Typography>
            </Grid>
            <Grid
              items
              md={6}
              sx={{
                background: "#fcf8ec",
                padding: 5,
                flexDirection: "column",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="./Pictures/img4.png"
                style={{ height: "auto", width: "400px" }}
              />
            </Grid>
            <Grid
              items
              md={12}
              sx={{
                background: "#fcf8ec",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
                padding: 10,
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "2.625rem",
                  lineHeight: 1.1,
                  fontFamily: "'The Nautigal', cursive",
                  color: "#45c5f7",
                  margin: 0,
                }}
              >
                Do good. Relax.
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "3.125rem",
                  lineHeight: 1.3,
                  margin: "2rem 0 2.5rem",
                  fontWeight: 600,
                  color: "#0e2d68",
                  maxWidth: 700,
                }}
              >
                Doing good while relaxing? We can hang with that.
              </Typography>
            </Grid>
            <Grid items md={12}>
              <img
                src="./Pictures/img6.png"
                style={{ height: "auto", width: "100%" }}
              />
            </Grid>
            <Grid items md={12} sx={{ background: "#d1f7f9", marginTop: -5 }}>
              <Typography
                sx={{
                  margin: 0,
                  fontSize: "2.1875rem",
                  lineHeight: 1.3,
                  fontWeight: 600,
                  color: "#0e2d68",
                  paddingLeft: 15,
                }}
              >
                Show us your escape.
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 110,
                  marginRight: 20,
                  padding: 10,
                }}
              >
                <Card
                  sx={{ minWidth: 275, background: "#d1f7f9", marginLeft: 2 }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src="./Pictures/img7.png"
                      style={{ height: "auto", width: "400px" }}
                    />
                  </CardContent>
                </Card>
                <Card
                  sx={{ minWidth: 275, background: "#d1f7f9", marginLeft: 2 }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src="./Pictures/img8.png"
                      style={{ height: "auto", width: "400px" }}
                    />
                  </CardContent>
                </Card>
                <Card
                  sx={{ minWidth: 275, background: "#d1f7f9", marginLeft: 2 }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src="./Pictures/img9.png"
                      style={{ height: "auto", width: "400px" }}
                    />
                  </CardContent>
                </Card>
                <Card
                  sx={{ minWidth: 275, background: "#d1f7f9", marginLeft: 2 }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src="./Pictures/img10.png"
                      style={{ height: "auto", width: "400px" }}
                    />
                  </CardContent>
                </Card>
              </div>
            </Grid>
            <Grid
              items
              md={12}
              sx={{
                background: "#129169",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  lineHeight: 1,
                  paddingLeft: 10,
                  fontSize: "3.125rem",
                  maxWidth: 500,
                  marginTop: 5,
                  marginBottom: 4,
                }}
              >
                Hang with us in your inbox.
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  lineHeight: 1.3,
                  paddingLeft: 10,
                  fontSize: "1rem",
                  marginTop: 5,
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                We make emails too. Drop us your deets below to stay updated on
                all things relaxing.
              </Typography>
              <ButtonGroup
                disableElevation
                variant="contained"
                style={{ padding: 20, paddingLeft: 90 }}
              >
                <TextField
                  id="outlined-basic"
                  label="Your Email"
                  variant="outlined"
                  InputProps={{ style: { color: "#fff" } }}
                  InputLabelProps={{ style: { color: "#fff" } }}
                  style={{ width: 150 }}
                />
                <Button color="error">LET'S HANG</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Box>
      </React.Fragment>
    </>
  );
};
export default About;

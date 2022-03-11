import React, { useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import myPicture from "../header/avatar_ek.jpg";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Button from "@mui/material/Button";
import { Box, Link } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Header(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Box>
      <Box
        id={props.id}
        sx={{
          minHeight: { md: "90vh" },
          mb: { xs: "75px", md: "0" },
          mt: { xs: "80px", sm: "10px" },
        }}
        display="flex"
        alignItems="center"
        overflow="hidden"
      >
        <Container>
          <Grid container data-aos="fade-up" data-aos-once>
            <Grid
              item
              xs={12}
              md={6}
              display="flex"
              justifyContent="center"
              mt={3}
            >
              <Avatar
                variant="circular"
                alt="Eugene Kasimov"
                src={myPicture}
                sx={{
                  height: { sm: 350, xs: 250 },
                  width: { sm: 350, xs: 250 },
                }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              textAlign={{ xs: "center", md: "start" }}
              margin="auto"
            >
              <Typography
                variant="overline"
                gutterBottom
                mt={{ xs: 5, md: 0 }}
                sx={{ color: "text.secondary" }}
                fontSize="1.2em"
              >
                Hi there! I'm
              </Typography>
              <Typography variant="h4" gutterBottom sx={{ color: "#1687A7" }}>
                Eugene
                <Typography
                  variant="h4"
                  component={"span"}
                  sx={{ color: "#276678" }}
                >
                  {" "}
                  Kasimov{" "}
                </Typography>
              </Typography>
              <Typography
                variant="body1"
                component={"span"}
                sx={{ color: "text.secondary" }}
                gutterBottom
                fontSize="1.1em"
              >
                A{" "}
                <Typography
                  variant="body1"
                  component={"span"}
                  sx={{ color: "#1687A7" }}
                  fontSize="1.1em"
                >
                  Front-End Web Developer
                </Typography>{" "}
                passionate about creating interactive and responsive Web
                Applications.
              </Typography>
              <Stack
                spacing={3}
                direction="row"
                mt={4}
                justifyContent={{ xs: "center", md: "start" }}
              >
                <Button
                  variant="outlined"
                  href="./ek_cv.pdf"
                  target="_blank"
                  sx={{ color: "#1687A7" }}
                  alt="Eugene Kasimov's Resume"
                >
                  RESUME
                </Button>
                <Link
                  href="https://www.linkedin.com/in/eugene-kasimov-aa031136/"
                  target="_blank"
                  alt="Linkedin"
                >
                  <LinkedInIcon fontSize="large" sx={{ color: "#1687A7" }} />
                </Link>
                <Link
                  href="https://github.com/ekasimov1"
                  target="_blank"
                  alt="GitHub"
                >
                  <GitHubIcon fontSize="large" sx={{ color: "#1687A7" }} />
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          minHeight: { md: "10vh" },
          mb: { xs: "75px", md: "0" },
        }}
        display="flex"
        justifyContent="center"
      >
        <Box className="arrow">
          <DoubleArrowIcon
            sx={{ transform: "rotate(90deg)", color: "#276678" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

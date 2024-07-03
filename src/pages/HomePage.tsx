import { Link } from "react-router-dom";
import { Box, Button, Container, Typography, Fab } from "@mui/material";
import { useEffect } from "react";
import "../styles/HPstyles.css";
import TopBar from "../components/TopBar";
import robotImage from "../assets/BACKGROUND4.png";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import MoreInfo from "../components/MoreInfo";
const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      document.querySelectorAll(".parallax").forEach((element) => {
        if (element instanceof HTMLElement) {
          element.style.backgroundPositionY = `${scrollTop * 0.5}px`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0,0,0,1)",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <TopBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          textAlign: "left",
          p: 3,
          backgroundColor: "rgba(0,0,10,1)",
        }}
      >
        <Box
          sx={{
            flex: 0.8,
            ml: { xs: 0, md: 3 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography className="title" gutterBottom>
            Welcome to the Future of Forex Trading
          </Typography>
          <Typography sx={{ mt: 4 }} className="subtitle" gutterBottom>
            where technology meets precision to revolutionize your trading
            strategy.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "center",
              textAlign: "center",
              mt: 6,
            }}
          >
            <Fab
              sx={{ mx: "auto", mt: { xs: 2, lg: 0 } }}
              variant="extended"
              className="explore-more"
            >
              <AutoStoriesIcon sx={{ mr: 1 }} />
              Explore more
            </Fab>
            <Fab
              sx={{ mx: "auto", mt: { xs: 2, lg: 0 } }}
              variant="extended"
              className="stats"
            >
              <TrendingUpIcon sx={{ mr: 1 }} />
              See our statistics
            </Fab>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "88vh",
          }}
        >
          <img
            src={robotImage}
            alt="Robot"
            style={{ height: "100%", maxWidth: "100%" }}
          />
        </Box>
      </Box>

      <MoreInfo />

      <Container sx={{ flexGrow: 1 }}></Container>

      <Box
        component="footer"
        sx={{ py: 3, mt: "auto", backgroundColor: "#f5f5f5" }}
        id="contact"
      >
        <Container>
          <Typography variant="body2" color="textSecondary" align="center">
            © 2024 Forex AI Bot. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              color="inherit"
              component={Link}
              to="#"
              sx={{ textTransform: "none" }}
            >
              Documentation
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="#"
              sx={{ textTransform: "none" }}
            >
              Privacy Policy
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="#"
              sx={{ textTransform: "none" }}
            >
              Contact
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;

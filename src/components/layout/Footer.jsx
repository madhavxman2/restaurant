import { Box, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 2,
            "& svg ": {
              fontSize: "45px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translatex(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* Icons */}
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <LinkedInIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{
            "@madia (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Mcsharp
        </Typography>
      </Box>
    </>
  );
};

export default Footer;

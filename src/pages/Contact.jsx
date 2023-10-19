import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          mx: 5,
          my: 5,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },
          '& p':{
            textAlign:'justify'
          }
        }}
      >
        <Typography variant="h4" sx={{'@media (max-width:600px)':{fontSize:'24px'}}}>Contact My Restuarnt</Typography>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa optio,
          vel minus iure aspernatur exercitationem blanditiis ipsam voluptas,
          incidunt deleniti, corrupti distinctio? Labore maxime aspernatur
          possimus blanditiis animi corrupti dicta?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, fugiat eius odit eligendi architecto quo aliquid velit delectus quasi porro hic autem cum. Id officiis quas nesciunt explicabo vero in.
        </p>
      </Box>
      <Box sx={{m:3,width:'600px',ml:5,'@media (max-width:600px)':{
        width:'auto'
      }}}>
        <TableContainer component={Paper}>
          <Table arial-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{
                  bgcolor:'black',
                  color:'white'
                }} align="center">
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell >
                  <SupportAgentIcon sx={{color:'red',pt:'2px'}}/>1800-00-0000(toll free)
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <EmailIcon  sx={{color:'red',pt:1}} /> help@restine.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <PhoneIcon  sx={{color:'red',pt:1}} /> +91-1246541254
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;

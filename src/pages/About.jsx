import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Typography } from "@mui/material";
const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            mb: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to Restuarant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque et
          quae labore accusantium, minima id doloribus obcaecati, est, sint
          commodi consectetur. Tempora facilis a laboriosam hic reiciendis neque
          reprehenderit corrupti.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maiores, veniam. Fugit consectetur quas optio
          dignissimos similique! Quo fugit dolorem reprehenderit. Alias
          exercitationem similique, nulla, a odio, unde explicabo amet quos
          tempora quae doloribus! Expedita totam facere necessitatibus nihil
          maiores esse nisi. Voluptatum quis eaque praesentium nisi quibusdam,
          necessitatibus vel repudiandae accusamus. Neque maxime unde ab
          perspiciatis aperiam quis deserunt distinctio nisi est quibusdam
          incidunt, dolore sunt. Dolores beatae ipsa veritatis nam possimus
          mollitia illum quibusdam fugiat quisquam, quam expedita id, minima
          vitae! Velit, repudiandae? Officiis error fugit molestiae alias
          officia id atque! Ad dolore dicta enim laudantium repudiandae
          asperiores quae.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          porro dolorum animi iste tempora voluptas facere eius molestias
          delectus deleniti consequatur excepturi, tempore nam aperiam officiis
          sed? Ducimus, perferendis dolores.Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Ea soluta nam debitis voluptas, tempore
          dicta nobis consequuntur, laudantium reprehenderit nisi veritatis ipsa
          a sequi. Architecto assumenda sapiente quisquam nam quo, odit unde
          blanditiis distinctio iste voluptate error ab quas exercitationem,
          eum, cum eos corporis aliquid. Quaerat quo nostrum aspernatur
          distinctio animi ullam impedit laboriosam repudiandae sapiente odio
          voluptatibus, rem deleniti dolores eveniet quia nobis eius ratione
          mollitia asperiores necessitatibus laudantium commodi corporis!
          Commodi ea, nemo id earum tempore, voluptatem, nihil adipisci quas
          voluptas eius modi? Minus, ad! Libero cum esse aliquam omnis vero quam
          nostrum voluptatem error adipisci, ea facere.
        </p>
      </Box>
    </Layout>
  );
};

export default About;

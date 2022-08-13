import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import imgx1 from "../../assets/images/vrgif.gif";
import imgx2 from "../../assets/images/05metaversebuild-Brainlight-alamy.jpeg";
import imgx3 from "../../assets/images/office.gif";
import imgx4 from "../../assets/images/sports.gif";
import imgx5 from "../../assets/images/Metaverse02.png";
import imgx6 from "../../assets/images/gaming.gif";
import { useNavigate } from "react-router-dom";

export default function RecipeReviewCard() {
  let history = useNavigate();

  const cardUI = (text, img, link, height) => {
    return (
      <Card onClick={() => history(link)} style={{ cursor: "pointer" }}>
        <CardMedia
          component="img"
          height={height || "200"}
          image={img}
          alt="Paella dish"
        />
        <CardContent style={{ backgroundColor: "#11111114" }}>
          <Typography
            component="h1"
            variant="h7"
            align="left"
            color="text.primary"
            fontSize="25px"
            style={{ textAlign: "center" }}
          >
            {text}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <Grid container spacing={2} style={{ marginTop: 20 }}>
        <Grid item xs={12}>
          <Typography
            component="h3"
            variant="h7"
            textAlign="left"
            color="text.primary"
            style={{ fontSize: 17, fontWeight: "bold" }}
          >
            Browse by category
          </Typography>
          <br />
        </Grid>

        <Grid item xs={4}>
          {cardUI(`VR`, imgx1, `/category/art`)}
        </Grid>
        <Grid item xs={4}>
          {cardUI(`Art Gallary`, imgx2, `/category/music`)}
        </Grid>
        <Grid item xs={4}>
          {cardUI(`Decorators`, imgx6, `/category/sports`)}
        </Grid>
        <Grid item xs={4}>
          {cardUI(`Game`, imgx4, `/category/art`)}
        </Grid>
        <Grid item xs={4}>
          {cardUI(`Land`, imgx5, `/category/music`)}
        </Grid>
        <Grid item xs={4}>
          {cardUI(`Office Items`, imgx3, `/category/sports`)}
        </Grid>
      </Grid>
      <div style={{ marginTop: 50 }}></div>
    </>
  );
}

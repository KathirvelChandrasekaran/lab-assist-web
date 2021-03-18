import React, { Fragment, useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  GridList,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SoftwareSVG from "../assets/software.svg";
import HardwareSVG from "../assets/hardware.svg";
import RemoteSVG from "../assets/remote.svg";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
});

const Home = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <div style={{ margin: "10em" }}>
        <GridList className={classes.gridList} cols={3}>
          <Card
            style={{ margin: "1em", height: "20em", width: "18em" }}
            className={classes.root}
            onClick={() => props.history.push("/createHardware")}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="150"
                image={HardwareSVG}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="h4" color="textSecondary" component="p">
                  Hardware Request
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            style={{ margin: "1em", height: "20em", width: "18em" }}
            className={classes.root}
            onClick={() => props.history.push("/createSoftware")}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="150"
                image={SoftwareSVG}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="h4" color="textSecondary" component="p">
                  Software Request
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card
            style={{ margin: "1em", height: "20em", width: "18em" }}
            className={classes.root}
            onClick={() => props.history.push("/createRemote")}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="150"
                image={RemoteSVG}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography variant="h4" color="textSecondary" component="p">
                  Remote Request
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </GridList>
      </div>

      <div style={{ margin: "10em" }}></div>
    </Fragment>
  );
};

export default Home;

import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

import team1 from "assets/img/haram/haram_1535.jpg";
import team2 from "assets/img/haram/haram_1586.jpg";
import team3 from "assets/img/haram/haram_1587.jpg";

const useStyles = makeStyles(styles);
const dashboardRoutes = [];

export default function ImageSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} width="100%" height="100%"/>
              </GridItem>
              <h4 className={classes.cardTitle}>
                Seoul Children Park
                <br />
                <small className={classes.smallTitle}>2019.10.09</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} width="100%" height="100%"/>
              </GridItem>
              <h4 className={classes.cardTitle}>
                Seoul Children Park
                <br />
                <small className={classes.smallTitle}>2019.11.18</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} width="100%" height="100%"/>
              </GridItem>
              <h4 className={classes.cardTitle}>
                Seoul Children Park
                <br />
                <small className={classes.smallTitle}>2019.11.18</small>
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>

  );
}

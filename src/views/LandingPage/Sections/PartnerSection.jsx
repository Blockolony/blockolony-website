import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import radius from "assets/img/partners/radius.png";
import cashaa from "assets/img/partners/cashaa.png";
import deltech from "assets/img/partners/deltech.png";
import universityofdelhi from "assets/img/partners/universityofdelhi.png";
import mfcequity from "assets/img/partners/mfcequity.png";
import e from "assets/img/partners/e.png";
import equichain from "assets/img/partners/equichain.png";
import lbx from "assets/img/partners/lbx.png";
import ethzurich from "assets/img/partners/ethzurich.png";
import startupweekend from "assets/img/partners/startupweekend.png";

class PartnerSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Past Collaborations</h2>
        <div>
          <GridContainer>
            <GridItem xs={4} sm={3} md={3}>
              <Card plain nopadding>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={radius} alt="..." className={imageClasses} />
                </GridItem>
              </Card>
            </GridItem>
            <GridItem xs={4} sm={3} md={3}>
              <Card plain nopadding>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={cashaa} alt="..." className={imageClasses} />
                </GridItem>
              </Card>
            </GridItem>
            <GridItem xs={4} sm={3} md={3}>
              <Card plain nopadding>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={deltech} alt="..." className={imageClasses} />
                </GridItem>
              </Card>
            </GridItem>
            <GridItem xs={4} sm={3} md={3}>
              <Card plain nopadding>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={universityofdelhi} alt="..." className={imageClasses} />
                </GridItem>
              </Card>
            </GridItem>
            <GridItem xs={4} sm={3} md={3}>
              <Card plain nopadding>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={mfcequity} alt="..." className={imageClasses} />
                </GridItem>
              </Card>
            </GridItem>
            <GridItem xs={4} sm={3} md={3}>
              <Card plain nopadding>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={e} alt="..." className={imageClasses} />
                </GridItem>
              </Card>
            </GridItem>
            <GridItem xs={4} sm={3} md={3}>
              <Card plain nopadding>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={equichain} alt="..." className={imageClasses} />
                </GridItem>
              </Card>
            </GridItem>
            <GridItem xs={4} sm={3} md={3}>
              <Card plain nopadding>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={lbx} alt="..." className={imageClasses} />
                </GridItem>
              </Card>
            </GridItem>
            <GridItem xs={4} sm={3} md={3}>
              <Card plain nopadding>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={ethzurich} alt="..." className={imageClasses} />
                </GridItem>
              </Card>
            </GridItem>
            <GridItem xs={4} sm={3} md={3}>
              <Card plain nopadding>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={startupweekend} alt="..." className={imageClasses} />
                </GridItem>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(PartnerSection);

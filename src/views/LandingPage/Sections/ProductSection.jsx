import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import People from "@material-ui/icons/People";
import Code from "@material-ui/icons/Code";
import Mic from "@material-ui/icons/Mic";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>The global hub of the blockchain community</h2>
            <h5 className={classes.description}>
              We run various events which connect new, promising projects with investors,
              allows networking between blockchain enthusiasts in your community,
              provides a platform to be a speaker and allow others interested in the
              space to share expertise and give advice to.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Networking"
                description="Meet industry professionals, investors, developers and enthusiasts at one of our local networking events in your community."
                icon={People}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Workshops"
                description="Develop your skills with our workshops and online resources taught by highly skilled experts within the blockchain space."
                icon={Code}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Seminars"
                description="Learn from the most knowledgable speakers in the world and connect with them through our seminars and lectures."
                icon={Mic}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);

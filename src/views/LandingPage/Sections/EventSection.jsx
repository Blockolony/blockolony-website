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
import Carousel from "views/Components/Sections/SectionCarousel.jsx";

class EventSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Upcoming events</h2>
            <h5 className={classes.description}>
            Here are some of our upcoming events, to view all of our events head
            over to our events page.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <Carousel/>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(EventSection);

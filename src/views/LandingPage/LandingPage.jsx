import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import {isMobile} from 'react-device-detect';

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Words from "components/Typography/Words.jsx";
import YoutubeOverlay from "components/Overlays/YoutubeOverlay.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import PartnerSection from "./Sections/PartnerSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import SubscribeSection from "./Sections/SubscribeSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      youtubeOverlayOpen: false
    };
  }
  handleClick = (event, active) => {
    this.setState(state => ({
      youtubeOverlayOpen: !state.youtubeOverlayOpen
    }));
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <Words/>
                <h4>
                  We have created a resourceful network that any blockchain student,
                  enthusiast or professional can benefit from joining. Our events
                  and educational resources are for individuals interested in investing,
                  developing and learning more about blockchain technology.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  onClick={!isMobile ? this.handleClick : null}
                  href={isMobile ? "https://www.youtube.com/watch?v=hfIGFEqTBqo" : null}
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />Highlights
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        {!isMobile ? <YoutubeOverlay
          videoId="hfIGFEqTBqo"
          open={this.state.youtubeOverlayOpen}
          onClick={this.handleClick}/>
          : null
        }
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
          </div>
        </div>
        <div className={classNames(classes.main, classes.mainTransparent)}>
          <div className={classes.container}>
            {/* <EventSection /> left out until there are more events */}
            <PartnerSection />
          </div>
        </div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <WorkSection />
          </div>
        </div>
        <div className={classNames(classes.main, classes.mainTransparent)}>
          <div className={classes.container}>
            {/* <EventSection /> left out until there are more events */}
            <SubscribeSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);

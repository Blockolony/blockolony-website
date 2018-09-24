import React from "react";
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

class ResourceSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div>
          <h2 className={classes.title}>University Institutions</h2>
          <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <h4 className={classes.cardTitle}>
                  University of Oxford
                  <br />
                  <small className={classes.smallTitle}>Blockchain Strategy Programme</small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <Button size="sm" color="primary" href="https://www.sbs.ox.ac.uk/programmes/oxford-blockchain-strategy-programme">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <h4 className={classes.cardTitle}>
                  UC Berkeley
                  <br />
                  <small className={classes.smallTitle}>Blockchain at Berkeley</small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <Button size="sm" color="primary" href="https://blockchain.berkeley.edu">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <h4 className={classes.cardTitle}>
                  Princeton University
                  <br />
                  <small className={classes.smallTitle}>BTC Tech Course</small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <Button size="sm" color="primary" href="https://piazza.com/princeton/spring2015/btctech/resources">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <h4 className={classes.cardTitle}>
                  University of Nicosia
                  <br />
                  <small className={classes.smallTitle}>Blockchain Initiative</small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <Button size="sm" color="primary" href="https://digitalcurrency.unic.ac.cy">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>

          <br/>

          <h2 className={classes.title}>Medium Blogs</h2>
          <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <h4 className={classes.cardTitle}>
                  Hackernoon
                  <br />
                  <small className={classes.smallTitle}>Hacker resources</small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <Button size="sm" color="primary" href="https://medium.com/@hackernoon">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <h4 className={classes.cardTitle}>
                  Vitalik Buterin
                  <br />
                  <small className={classes.smallTitle}>Personal blog</small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <Button size="sm" color="primary" href="https://medium.com/@VitalikButerin">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <h4 className={classes.cardTitle}>
                  Vlad Zamfir
                  <br />
                  <small className={classes.smallTitle}>Personal blog</small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <Button size="sm" color="primary" href="https://medium.com/@Vlad_Zamfir">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <h4 className={classes.cardTitle}>
                  Coin and Crypto
                  <br />
                  <small className={classes.smallTitle}>Crypto publication</small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <Button size="sm" color="primary" href="https://medium.com/@coinandcrypto">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>

          <br/>

          <h2 className={classes.title}>News Sources</h2>
          <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <h4 className={classes.cardTitle}>
                  Cointelegraph
                  <br />
                  <small className={classes.smallTitle}>Blockchain news</small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <Button size="sm" color="primary" href="https://cointelegraph.com">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <h4 className={classes.cardTitle}>
                  CCN
                  <br />
                  <small className={classes.smallTitle}>Cryptocurrency news</small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <Button size="sm" color="primary" href="https://www.ccn.com">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <h4 className={classes.cardTitle}>
                  Bitcoin News
                  <br />
                  <small className={classes.smallTitle}>Bitcoin Cash news</small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <Button size="sm" color="primary" href="https://news.bitcoin.com">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <h4 className={classes.cardTitle}>
                  EWS
                  <br />
                  <small className={classes.smallTitle}>Ethereum news</small>
                </h4>
                <CardFooter className={classes.justifyCenter}>
                  <Button size="sm" color="primary" href="https://ethereumworldnews.com">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(ResourceSection);

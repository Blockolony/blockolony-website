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

class ResourceSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <div>
          <h2 className={classes.title}>Cryptoeconomics</h2>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <h4 className={classes.cardTitle}>
                  CryptoTech Tutor
                  <br />
                  <small className={classes.smallTitle}>Educational site to improve research techniques</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    CryptoTech Tutor is an educational site that brings you courses in relation to
                    Bitcoin, Cryptocurrency and Blockchain/Distributed Ledger Technology.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button color="primary" href="https://www.instagram.com/cryptotech_tutor/">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <h4 className={classes.cardTitle}>
                  Cryptoeconomics.Study
                  <br />
                  <small className={classes.smallTitle}>A free and open source course on Cryptoeconomics</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    This introduction aims to define cryptoeconomics and outline some tools for
                    the design and analysis of cryptoeconomic systems.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button color="primary" href="https://cryptoeconomics.study/">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <h4 className={classes.cardTitle}>
                  Vlad Zamfir on Cryptoeconomics
                  <br />
                  <small className={classes.smallTitle}>Lecture on the meaning of Cryptoeconomics</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Vlad Zamfir is a researcher with the Ethereum Foundation, and this lecture covers
                    sharding protocols and explains the idea of cryptoeconomics.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button color="primary" href="https://www.youtube.com/watch?v=cM5KYcOm66Y">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>

          <br/>

          <h2 className={classes.title}>Developing</h2>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <h4 className={classes.cardTitle}>
                  Blockchain at Berkely
                  <br />
                  <small className={classes.smallTitle}>A student run blockchain course for developers</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Learn about smart contract programming, testing, security and the
                    underlying details of Bitcoin and Ethereum clients as part of Blockchain at Berkeley.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button color="primary" href="https://learnblockcha.in/">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <h4 className={classes.cardTitle}>
                  Cryptotextbook
                  <br />
                  <small className={classes.smallTitle}>A graduate course in applied cryptography</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Cryptography is an indispensable tool used to protect information in computing systems.
                    The book covers many constructions for different tasks in cryptography.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button color="primary" href="http://toc.cryptotextbook.net/home">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <h4 className={classes.cardTitle}>
                  Etheoryum
                  <br />
                  <small className={classes.smallTitle}>Open source Ethereum knowledge base</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Learn about the fundamentals of blockchains and the Ethereum system,
                    creating smart contracts, scalability research, governance mechanisms and more.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button color="primary" href="https://etheoryum.com/">
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

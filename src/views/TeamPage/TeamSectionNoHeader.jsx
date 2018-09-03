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

import dominic from "assets/img/faces/dominic.jpg";
import shivil from "assets/img/faces/shivil.jpg";
import ankit from "assets/img/faces/ankit.jpg";
import harrison from "assets/img/faces/harrison.jpg";
import zsolt from "assets/img/faces/zsolt.jpg";
import rahul from "assets/img/faces/rahul.jpg";
import jack from "assets/img/faces/jack.jpg";
import rebecca from "assets/img/faces/rebecca.jpg";
import ruskin from "assets/img/faces/ruskin.jpg";
import tanya from "assets/img/faces/tanya.jpg";
import pragati from "assets/img/faces/pragati.png";

class TeamSection extends React.Component {
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
          <h2 className={classes.title}>Core</h2>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={dominic} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Dominic Reynolds
                  <br />
                  <small className={classes.smallTitle}>CEO & Head of UK</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Dominic was an intern at an established digital
                    asset merchant bank in New York last summer. With a number
                    of previous ventures under his belt, he is extremely
                    dedicated to leading the team in order to achieve the
                    company’s vision. Dominic is currently undertaking a BSc
                    Mathematics and Economics degree at the University of St Andrews.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    href="https://www.linkedin.com/in/dreynolds10100/"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={shivil} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Shivil Sahni
                  <br />
                  <small className={classes.smallTitle}>President & Head of India</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Shivil is currently a senior analyst at PwC, however, thrives
                    in the startup environment. Shivil was the president of
                    The Entrepreneurship Development Cell and was a business
                    head at British Cross Clothing. Shivil will focus on global
                    corporate development as well as leading the Indian colony.
                    Shivil achieved a B.Com. from Delhi University.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    href="https://www.linkedin.com/in/shivilsahni/"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={pragati} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Pragati Dawar
                  <br />
                  <small className={classes.smallTitle}>CFO</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Pragati is a financial specialist with over 3 years experience
                    at Fidelity and has been involved with the blockchain space
                    for a number of years. Pragati will be responsible for
                    organizing the company’s finances and ensuring we comply
                    with all crypto regulation. Pragati achieved a CA qualification
                    from the ICAI.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    href="https://www.linkedin.com/in/pragati-d-a116a232/"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={zsolt} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Zsolt Kovacs
                  <br />
                  <small className={classes.smallTitle}>Head of Switzerland</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Zsolt implemented digital strategies at Accenture whilst
                    maintaining a keen interest in digital assets. Zsolt has
                    experience as a startup consultant, which will be beneficial
                    for Blockolony’s overall development as well as our
                    Switzerland colony. Zsolt is a graduate student at ETH Zurich.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    href="https://www.linkedin.com/in/zsoltfkovacs/"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={harrison} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Harrison Gwinnett
                  <br />
                  <small className={classes.smallTitle}>Corporate Development</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Harrison is a successful entrepreneur and investor who built
                    his financial network at Citi. Harrison has deep connections
                    to a number of the top 10 cryptocurrency development teams as
                    well as smaller cap projects. Harrison will be handling clients
                    and bringing strategic partners onboard globally.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    href="https://www.linkedin.com/in/harrison-gwinnett-3a7443b0/"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={rahul} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Rahul Kaushik
                  <br />
                  <small className={classes.smallTitle}>Operations</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Rahul has a combined 2 years experience at PwC and American Express,
                    gaining a variety of useful skills. Rahul will help with
                    company-wide ground level operations. Rahul achieved a B.Com.
                    from Delhi University.
                    <br/><br/><br/>
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    href="https://www.linkedin.com/in/rahulkaushik99/"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>

          <h2 className={classes.title}>HR & Advisors</h2>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={rebecca} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Rebecca Lloyd
                  <br />
                  <small className={classes.smallTitle}>Marketing</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Rebecca has interned at Scotiabank and BACB, most recently
                    as a communications and marketing intern. Rebecca manages
                    our social media content and online presence. Rebecca is
                    currently undertaking a BA English degree at the
                    University of Warwick.
                    <br/><br/>
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    href="https://www.linkedin.com/in/rebecca-lloyd-0b1463167/"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={tanya} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Tanya Singh
                  <br />
                  <small className={classes.smallTitle}>Marketing</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Tanya has a diverse set of skills that she gained from being
                    an HR coordinator, business development intern, videographer
                    and marketing manager. Tanya will work with Rebecca to
                    coordinate our online content and reach out to a number of
                    potential partners. Tanya achieved a B.Com. from Delhi University.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    href="https://www.linkedin.com/in/tanyasinghgambhir/2"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={jack} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Jack Leslie
                  <br />
                  <small className={classes.smallTitle}>Technical Advisor</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Jack is a talented developer who recently completed an internship
                    at EXTROPY.IO, a blockchain consultancy firm, to gain technical
                    experience as well as enhance his smart contract coding ability.
                    Jack is currently undertaking a BSc Computer Science degree at
                    the University of St. Andrews.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    href="https://www.linkedin.com/in/jackjdleslie/"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={ankit} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Ankit Dawar
                  <br />
                  <small className={classes.smallTitle}>Financial Advisor</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Ankit is an experienced professional having worked at PwC and
                    KPMG whilst also having a strong interest in blockchain
                    technology. Ankit will be advising Blockolony on financials
                    and business development. Ankit achieved a CA qualification
                    from the ICAI and a degree from Delhi University.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                    href="https://www.linkedin.com/in/ankit-dawar-58795813/"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
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

export default withStyles(teamStyle)(TeamSection);

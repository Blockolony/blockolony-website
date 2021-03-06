import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import joinStyle from "assets/jss/material-kit-react/views/landingPageSections/joinStyle.jsx";

import joinUsMembers from "assets/img/join-us-members.jpg";
import joinUsInstitutions from "assets/img/join-us-institutions.jpg";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8} className="work-pills">
            <h2 className={classes.title}>Join Us</h2>
            <h4 className={classes.description}>
              We are actively looking for members, partners and sponsors for our
              events.
            </h4>
            <GridContainer justify="center">
              <GridItem cs={12} sm={6}>
                <Card plain={classes.plainTabs}>
                  <CardHeader color={classes.headerColor} plain={classes.plainTabs}
                    style={{textAlign: "center", paddingTop: "60px"}}>
                    <img src={joinUsMembers} alt="Members" width="100%" style={{
                      boxShadow:
                        "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
                      borderRadius: "6px",
                      marginBottom: "20px"
                    }}/>
                  </CardHeader>
                  <CardBody>
                    <p className={classes.description}>
                      Members will benefit from Blockolony’s educational resources,
                      global network of enthusiasts and recruitment plus programme.
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem cs={12} sm={6}>
                <Card plain={classes.plainTabs}>
                  <CardHeader color={classes.headerColor} plain={classes.plainTabs}
                    style={{textAlign: "center", paddingTop: "60px"}}>
                    <img src={joinUsInstitutions} alt="Institutions" width="100%" style={{
                      boxShadow:
                        "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
                      borderRadius: "6px",
                      marginBottom: "20px"
                    }}/>
                  </CardHeader>
                  <CardBody>
                    <p className={classes.description}>
                      Institutions will benefit from attending, speaking and sponsoring
                      our events as well as hand picking top talent from our members.
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(joinStyle)(WorkSection);

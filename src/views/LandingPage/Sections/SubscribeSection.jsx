import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";

import subscribeStyle from "assets/jss/material-kit-react/views/landingPageSections/subscribeStyle.jsx";

class SubscribeSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <Card className={classes.card}>
          <h2 className={classes.title}>Subscribe</h2>
          <h4 className={classes.description}>
            Sign up with your email address to receive news and updates.
          </h4>
          <div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <form
                  name="subscribe"
                  method="post"
                  action="/success"
                >
                  <input type="hidden" name="form-name" value="subscribe" />
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText="Your Email"
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          name: "email"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <Button type="submit" color="primary">Sign up</Button>
                    </GridItem>
                  </GridContainer>
                </form>
              </GridItem>
            </GridContainer>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(subscribeStyle)(SubscribeSection);

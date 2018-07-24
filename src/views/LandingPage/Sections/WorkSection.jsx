import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

// @material-ui/icons
import { GroupAdd, PlaylistAdd, NoteAdd } from "@material-ui/icons";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8} className="work-pills">
            <h2 className={classes.title}>Work with us</h2>
            <h4 className={classes.description}>
              We are actively looking for partners, sponsors and speakers for our
              events.
            </h4>
            <NavPills
              color="primary"
              horizontal={{
                tabsGrid: { xs: 12, sm: 4, md: 4 },
                contentGrid: { xs: 12, sm: 8, md: 8 }
              }}
              tabs={[
                {
                  tabButton: "Partners",
                  tabIcon: GroupAdd,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate
                        B2C users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively
                        administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after
                        installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively
                        administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after
                        installed base benefits.
                      </p>
                    </span>
                  )
                },
                {
                  tabButton: "Sponsors",
                  tabIcon: NoteAdd,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate
                        B2C users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively
                        administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after
                        installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively
                        administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after
                        installed base benefits.
                      </p>
                    </span>
                  )
                },
                {
                  tabButton: "Speakers",
                  tabIcon: PlaylistAdd,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate
                        B2C users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively
                        administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after
                        installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively
                        administrate empowered markets via plug-and-play
                        networks. Dynamically procrastinate B2C users after
                        installed base benefits.
                      </p>
                    </span>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);

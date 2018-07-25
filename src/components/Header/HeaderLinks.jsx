/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, Event, Book, Map, CardMembership, People } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/join"
          color="transparent"
          className={classes.navLink}
        >
          <CardMembership className={classes.icons} /> Join
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://blockolony.eventbrite.com/"
          color="transparent"
          className={classes.navLink}
        >
          <Event className={classes.icons} /> Events
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/team"
          color="transparent"
          className={classes.navLink}
        >
          <People className={classes.icons} /> Team
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/resources"
          color="transparent"
          className={classes.navLink}
        >
          <Book className={classes.icons} /> Resources
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);

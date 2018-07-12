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
import { Apps, Event, Book, Map, CardMembership } from "@material-ui/icons";

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
          href="/events"
          color="transparent"
          className={classes.navLink}
        >
          <CardMembership className={classes.icons} /> Join
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/events"
          color="transparent"
          className={classes.navLink}
        >
          <Event className={classes.icons} /> Events
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/map"
          color="transparent"
          className={classes.navLink}
        >
          <Map className={classes.icons} /> Map
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
      <ListItem className={classes.listItem}>
        <Button
          href="https://instagram.com/blockolony"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fab fa-instagram"} />
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="https://www.facebook.com/blockolony"
          target="_blank"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fab fa-facebook"} />
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="https://youtube.com/blockolony"
          target="_blank"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fab fa-youtube"} />
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="https://t.me/blockolony"
          target="_blank"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fab fa-telegram-plane"} />
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);

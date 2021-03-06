/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                className={classes.block}
              >
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/#about"
                className={classes.block}
              >
                About
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://goo.gl/forms/ylEY5lG9MGLmJxLi2"
                className={classes.block}
              >
                Join
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/contact"
                className={classes.block}
              >
                Contact
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://twitter.com/blockolony"
                className={classes.block}
                target="_blank"
              >
                <i className={classes.socialIcons + " fab fa-twitter"} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://instagram.com/blockolony"
                className={classes.block}
                target="_blank"
              >
                <i className={classes.socialIcons + " fab fa-instagram"} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://t.me/blockolony"
                className={classes.block}
                target="_blank"
              >
                <i className={classes.socialIcons + " fab fa-telegram-plane"} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://facebook.com/blockolony"
                className={classes.block}
                target="_blank"
              >
                <i className={classes.socialIcons + " fab fa-facebook"} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://medium.com/@blockolony"
                className={classes.block}
                target="_blank"
              >
                <i className={classes.socialIcons + " fab fa-medium"} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.youtube.com/channel/UCoyP0nFT-3gw5YvP7pxGlqQ"
                className={classes.block}
                target="_blank"
              >
                <i className={classes.socialIcons + " fab fa-youtube"} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.meetup.com/members/253224515/"
                className={classes.block}
                target="_blank"
              >
                <i className={classes.socialIcons + " fab fa-meetup"} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.linkedin.com/company/blockolony/"
                className={classes.block}
                target="_blank"
              >
                <i className={classes.socialIcons + " fab fa-linkedin"} />
              </a>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);

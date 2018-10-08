import React, { Component } from 'react';
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Typist from 'react-typist';

import wordsStyle from "assets/jss/material-kit-react/components/wordsStyle.jsx";

class Words extends Component {

  constructor(props) {
    super(props);
    this.state = {
      typing: true
    };
  }

  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true })
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1 className={classes.typistHeader}>Our mission is to be your blockchain
        {this.state.typing
          ? <Typist className={classes.typistWrapper} onTypingDone={this.done}>
              <span> education</span>
              <Typist.Backspace count={9} delay={2000} />
              <span> network</span>
              <Typist.Backspace count={7} delay={2000} />
              <span> recruiter</span>
              <Typist.Backspace count={9} delay={2000} />
            </Typist>
          : ''}
        </h1>
      </div>

    )
  }
}

Words.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(wordsStyle)(Words);

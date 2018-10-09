import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import overlayStyle from "assets/jss/material-kit-react/components/overlayStyle.jsx";

import YouTube from 'react-youtube';

class YoutubeOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: null
    };
  }
  onClickExtended = () => {
    this.props.onClick();
    this.state.event.target.pauseVideo();
  };
  _onReady = (event) => {
    this.setState({
      event: event
    })
  };
  render() {
    const { classes, videoId, open, onClick } = this.props;
    return (
      <div className={open ? classes.overlay : classes.hidden} onClick={this.onClickExtended}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem sm={12}>
              <YouTube
                className={classes.youtube}
                videoId={videoId}
                onReady={this._onReady}
                onEnd={onClick}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }

}

YoutubeOverlay.propTypes = {
  classes: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired
};

export default withStyles(overlayStyle)(YoutubeOverlay);

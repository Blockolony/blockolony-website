import React, { Component } from 'react';
// @material-ui/icons
import { People, Code, Mic } from "@material-ui/icons";

// default photo
import defaultPhoto from "assets/img/bg.jpg";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "More Events Coming Soon",
      location: null,
      time: null,
      date: null,
      pictureLink: defaultPhoto,
      url: "https://blockolony.eventbrite.com"
    };
  }

  componentDidMount() {
    fetch('https://www.eventbriteapi.com/v3/users/me/owned_events/?token=7QUBP6MTSUWMGLCOQUG6')
    .then(results => {
      return results.json();
    }).then(data => {
      let event = data.events[this.props.index];
      this.setState({
        name: event.name.text,
        url: event.url,
        pictureLink: event.logo.original.url
      })
    }).catch(e => {

    })
  }

  render() {
    return(
      <div>
        <img
          src={this.state.pictureLink}
          alt="First slide"
          className="slick-image"
          height="100%"
        />
        <div className="slick-caption">
          <h3>
            <a className="event-link" href={this.state.url} target="_blank">
              {this.state.name}
            </a>
          </h3>
        </div>
      </div>
    );
  }
}

export default Event

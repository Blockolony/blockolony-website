import React, { Component } from 'react';
// @material-ui/icons
import { EventNote, LocationOn, Calendar } from "@material-ui/icons";
import EventIcon from "@material-ui/icons/Event";

// default photo
import defaultPhoto from "assets/img/bg.jpg";

var dateFormat = require('dateformat');

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "More Events Coming Soon",
      venue_id: null,
      location: null,
      time: null,
      date: null,
      pictureLink: defaultPhoto,
      url: "https://blockolony.eventbrite.com"
    };
  }

  componentDidMount() {
    let tokenQueryParameter = '?token=' + process.env.EVENTBRITE_API_TOKEN;
    let eventUrl = 'https://www.eventbriteapi.com/v3/users/me/owned_events/';
    eventUrl += tokenQueryParameter;
    fetch(eventUrl)
    .then(results => {
      return results.json();
    }).then(data => {
      let event = data.events[this.props.index];
      let parsedDate = Date.parse(event.start.utc).toString();
      this.setState({
        name: event.name.text,
        url: event.url,
        pictureLink: event.logo.original.url,
        date: dateFormat(Date(parsedDate), "fullDate")
      });

      let venueUrl = 'https://www.eventbriteapi.com/v3/venues/';
      venueUrl += event.venue_id;
      venueUrl += tokenQueryParameter;
      return fetch(venueUrl);
    }).then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        location: data.name + ", " + data.address.localized_area_display
      })
    }).catch(e => {
      console.error(e);
    });
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
        <a href={this.state.url} target="_blank">
          <div className="slick-caption-mobile">
            <h6>
              {this.state.name}
            </h6>
          </div>
        </a>
      </div>
    );
  }
}

export default Event

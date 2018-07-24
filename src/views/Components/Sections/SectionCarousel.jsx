import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import Event from "components/Events/Event.js";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

class SectionCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfEvents: 0
    };
  }

  componentDidMount() {
    fetch('https://www.eventbriteapi.com/v3/users/me/owned_events/?token=7QUBP6MTSUWMGLCOQUG6')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        numberOfEvents: data.pagination.object_count % 4
      })
    }).catch(e => {

    })
  }

  getEvents() {

    let events = [];

    for (let i = 0; i <= this.state.numberOfEvents; i++) {
      events.push(i);
    }

    let eventsList = events.map(i => {
      return <Event index={i}/>
    })

    return eventsList;

  }

  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  {this.getEvents()}
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);

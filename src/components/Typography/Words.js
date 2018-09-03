import React, { Component } from 'react';
import Typist from 'react-typist';

class Words extends Component {

  constructor(props) {
    super(props);
    this.state = {
      typing: true
    }

    this.done = this.done.bind(this);
  }

  done() {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true })
    });
  }

  render() {
    return (
      <div>
        <h1 className="typist-header">Our mission is to be your blockchain
        {this.state.typing
          ? <Typist onTypingDone={this.done}>
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

export default Words;

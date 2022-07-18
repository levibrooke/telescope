import React from 'react';
import { isMobileOnly } from "react-device-detect";
import PageVisibility from 'react-page-visibility';
import propTypes from 'prop-types';
import Siema from 'siema';
import SingleCard from './single-card';

class StateCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goToState: null,
      wasSearchCancelled: false
    }
    this.interval = null;
    this.cardTimeout = 3000;
  }

  componentDidMount = () => {
    if (this.props.search) {
      this.setState({ wasSearchCancelled: this.props.search});
    };
    if (this.props.selected !== null) {
      this.setState({goToState: this.props.selected});
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props !== prevProps) {
      this.initializeSlider();
    }

    if (this.state !== prevState) {
      this.initializeSlider();

      if (this.state.goToState !== null) {
        const stateTarget = window.innerWidth >= 1024
        ? this.state.goToState - 1
        : this.state.goToState;

        const stateIndex = index => window.innerWidth >= 1024
        ? index + 1
        : index;

        this.siema.goTo(stateTarget, function() {
          const index = this.currentSlide;
          const selectedState = this.innerElements[stateIndex(index)];
        })
      }
    }
  }

  initializeSlider = () => {
    this.siema = new Siema({
      selector: '.state-card-list',
      duration: (!isMobileOnly) ? 1500 : 0,
      easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: true,
      rtl: false,
      perPage: {
        0: 1,
        768: 2,
        1024: 3
      }
    });
    this.playSlider();
  }

  playSlider = () => {
    if (this.interval !== null) {
      this.stopSlider();
    }
    // disable scrolling on mobile
    if (!isMobileOnly) {
      this.interval = setInterval(() => this.siema.next(), this.cardTimeout);
    }

    let hoverState = document.querySelector('.state-card--hover');
    if (hoverState) {
      setTimeout(() => hoverState.classList.remove("state-card--hover"), this.cardTimeout);
    }
  }

  stopSlider = () => {
    clearInterval(this.interval);
    this.interval = null;
  }

  handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.playSlider();
    } else {
      this.stopSlider();
    }
  }

  componentWillUnmount = () => {
    this.stopSlider();
  }

  render() {
    const data = this.props.data;

    return (
      <PageVisibility onChange={this.handleVisibilityChange}>
        <ul className="state-card-list">
          {
            Object.values(data)
              .map(({ name, raise, spend }) => 
                <SingleCard
                  key={name}
                  name={name}
                  raise={raise}
                  spend={spend}
                  mouseOver={this.stopSlider}
                  mouseLeave={this.playSlider}
                />
            )
          }
        </ul>
      </PageVisibility>
    )
  }
}

StateCards.propTypes = {
  data: propTypes.object.isRequired
}

export default StateCards;
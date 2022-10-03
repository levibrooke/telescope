import React from 'react';
import propTypes from 'prop-types';
import StateSearch from './state-search';
import StateCards from './state-cards';

class StateData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearchOpen: false,
      wasSearchCancelled: false,
      selectedState: null
    };
  }

  handleSearchButton = () => {
    this.setState(prevState => ({
      isSearchOpen: !prevState.isSearchOpen
    }));
    if (this.state.isSearchOpen === true && this.state.selectedState === null) {
      this.setState({wasSearchCancelled: true});
    };
  }

  handleStateChange = (id) => {
    this.setState({selectedState: id, isSearchOpen: false})
  }

  // filter out smaller states
  filterStates = (states) => {
    const ignoreStates = ['FM', 'MH', 'PW'];

    ignoreStates.forEach((state) => {
      delete states[state];
    });

    return states;
  }

  openDataRequest = () => {
    window.open('http://request.circavictor.com', '_blank');
  }

  render() {
    const states = this.filterStates(this.props.data.states);

    return (
      <section className="state-data">
        <button className="state-data__button" onClick={this.handleSearchButton}>
          {this.state.isSearchOpen ? 'Cancel' : 'Search for a State'}
        </button>
        <button className="request-data__button" onClick={this.openDataRequest}>
          Request Data
        </button>
        {
          this.state.isSearchOpen ?
            <StateSearch 
              data={states}
              onStateChange={this.handleStateChange}
            /> :
            <StateCards 
              data={states}
              selected={this.state.selectedState}
              search={this.state.wasSearchCancelled}
            />
        }
      </section>
    )
  }
}

StateData.propTypes = {
  data: propTypes.object.isRequired,
  stats: propTypes.arrayOf(propTypes.data)
};

export default StateData;
import React from 'react';
import propTypes from 'prop-types';

class StateSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onStateChange(parseInt(e.target.id));
  }

  render() {
    const data = this.props.data;

    return (
      <ul className="state-search-list">
        {
          Object.keys(data)
            .map((ele, idx) =>
              <li key={ele} className="state-abbreviation">
                <a onClick={this.handleChange} id={idx}>{ele}</a>
              </li>
          )
        }
      </ul>
    )
  }  
}

StateSearch.propTypes = {
  data: propTypes.object.isRequired
}

export default StateSearch;
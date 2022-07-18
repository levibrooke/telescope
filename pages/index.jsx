import React from 'react';
import { connect } from 'react-redux';
import NationwideFigures from '../components/nationwide-figures';
import NationwideActivity from '../components/nationwide-activity';
import StateData from '../components/state-data';
import Footer from '../components/footer';
import { getSpendingData } from '../actions/spending';
import '../sass/style.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    this.props.getSpendingData();
  }

  render() {
    const { spending } = this.props;

    return (
      <main className="container">
        <section className="title">
          <h1>United States<span className="">Political Economy</span></h1>
        </section>
        <NationwideFigures data={spending} />
        <NationwideActivity data={spending} />
        <StateData data={spending} />
        <Footer />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    spending: state.spending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSpendingData: () => dispatch(getSpendingData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);

import React from 'react';
import App, { Container } from 'next/app';
import { Provider, connect } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { store } from '../utils/store';

class Telescope extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps};
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(store, {debug: false})(connect(null, null)(Telescope));

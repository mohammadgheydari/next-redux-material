import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import theme from '../src/styles/theme';
import store from '../src/store';
import Header from '../src/components/layout/header';
import Footer from '../src/components/layout/footer';
import '../src/styles/core.scss';
import "../src/styles/index.scss";


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const _App = withRedux(store)(
  class _App extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      }
    }
    componentDidMount() {
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }
    render() {
      const {
        Component,
        pageProps,
        store
      } = this.props;
      return (
        <Container>
          <Head>
            <title>عنوان صفحه</title>
          </Head>
          <StylesProvider jss={jss}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Provider store={store}>
              <Header />
              <main>
                <Component {...pageProps} />
              </main>
              <Footer />
            </Provider>
          </MuiThemeProvider>
          </StylesProvider>
        </Container>

      )
    }
  }
)

export default _App


import Meta from './meta';
import Header from './header';
import Footer from './footer';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import rtl from 'jss-rtl';
import MuiTheme from '../../styles/theme';
import "../../styles/index.scss";
import "../../styles/core.scss";
import AppBar from '@material-ui/core/AppBar';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default class Layout extends React.Component {
  // handleUpdateRoute = () => window.scrollTo(0, 0);
  // scrollToTop = () => window.scroll(0, 0);
  render() {
    const { children, title = 'تایتل پیش فرض' } = this.props;

    return (
      <StylesProvider jss={jss}>
        <MuiThemeProvider theme={MuiTheme}>
          <CssBaseline />
          <Meta title={title} />
          <AppBar title = "Title" />

          <Header />
          <main>
          {children}
          </main>
          <Footer />
        </MuiThemeProvider>
      </StylesProvider>
    );
  }
}
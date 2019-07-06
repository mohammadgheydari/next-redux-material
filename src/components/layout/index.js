import Meta from './meta';
import Header from './header';
import Footer from './footer';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import rtl from 'jss-rtl';
import MuiTheme from '../styles/theme';
import "../styles/core.scss";

// Configure JSS
const jss = create({plugins: [...jssPreset().plugins, rtl()]});

export default class Layout extends React.Component {
  // handleUpdateRoute = () => window.scrollTo(0, 0);
  // scrollToTop = () => window.scroll(0, 0);
  render() {
    const { children, title = 'تایتل پیش فرض' } = this.props;

    return (
      <StylesProvider jss={jss}>
        <MuiThemeProvider theme={MuiTheme}>
          <CssBaseline />
          <div dir="rtl">
            <Meta title={title} />
            <Header />
            {children}
            <Footer />
          </div>
        </MuiThemeProvider>
       </StylesProvider>
    );
  }
}
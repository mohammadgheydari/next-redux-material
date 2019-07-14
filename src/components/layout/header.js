import Link from 'next/link';
import Fab from '@material-ui/core/Fab';
// import Button from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import LinkActive from 'next-link-active';



export default class Header extends React.Component {
    state ={
        activeClass: ''
    }
    componentDidMount(){
        window.addEventListener('scroll', () => {
           let activeClass = 'scroll';
           if(window.scrollY === 0){
               activeClass = '';
           }
           this.setState({ activeClass });
        });
    }
    render() {
      return <header className={`header ${this.state.activeClass}`}>
      <nav className="container-fluid">
          <div className="right-section">
              <Link href='/'>
                  <a className="logo"><img src="https://www.digikala.com/static/files/ddcba6ed.svg" />  </a>
              </Link>
              <div className="menu">
                  {/* <Link as={`/p/12`} href={`/post?title=${"test"}`}>
                  <a>test</a>
              </Link> */}
                  <LinkActive href="/" passHref>
                      {active => <a className= { active ? 'active link-hover' : 'link-hover'} >صفحه اصلی</a>}
                  </LinkActive>
                  <LinkActive href="/about" passHref>
                      {active => <a className= { active ? 'active link-hover' : 'link-hover'} >درباره ما</a>}
                  </LinkActive>
                  <LinkActive href="/contact" passHref>
                      {active => <a className= { active ? 'active link-hover' : 'link-hover'} >تماس با ما</a>}
                  </LinkActive>

              </div>
          </div>

          <div className="left-section">
              {/* <Link href='/'><a className="links ml-3 mt-1">ورود</a></Link> */}

              {/* <Button variant="outlined" color="primary" className="px-4 py-0 mt-2 ml-2" size="small" >
                  ورود
               </Button> */}
              <Fab variant="extended" color="primary" className="my-3" size="small" style={{ padding: '0 1.6rem' }}>
                  ثبت نام
               </Fab>
          </div>

      </nav>
  </header>;
    }
  }

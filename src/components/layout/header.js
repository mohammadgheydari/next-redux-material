import Link from 'next/link';
import Fab from '@material-ui/core/Fab';
// import Button from '@material-ui/core/Button';

function Header() {
    return <header className="header ">
        <nav className="container-fluid">
            <div className="right-section">
                <Link href='/'>
                    <a className="logo"><img src="https://www.digikala.com/static/files/ddcba6ed.svg" />  </a>
                </Link>
            </div>
            <div className="center-section menu">
                {/* <Link as={`/p/12`} href={`/post?title=${"test"}`}>
                    <a>test</a>
                </Link> */}
                <Link href='/'><a className="link-hover active">صفحه اصلی</a></Link>
                <Link href='/about'><a className="link-hover">درباره ما</a></Link>
                <Link href='/contact'><a className="link-hover">تماس با ما</a></Link>
            </div>
            <div className="left-section">
                {/* <Fab variant="extended" color="primary" className="px-4 py-0" size="small">
                    ثبت نام
                 </Fab> */}
            </div>

        </nav>
    </header>;
}

export default Header;
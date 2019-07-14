import Link from 'next/link';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));


function Footer() {
  const classes = useStyles();

  return <footer className="card dark mt-2">
    <div className="container-fluid">
      <div className="row py-3">
        <div className="col-xs-12 col-md-6 col-lg-3 ">
          <Link href='/'>
            <a className="footer-logo"><img src="https://www.digikala.com/static/files/ddcba6ed.svg" />  </a>
          </Link>
          <p className="readable text-justify ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
          <p className="fa-num">
            تلفن:  0214586754
          </p>
          <small className="mute">
            1398 © تمامی حقوق این وبسایت برای ما محفوظ است.
        </small>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-2">
          <h2 className="mini-title">قوانین</h2>
          <ul className="links mt-4">
            <li><Link href='/'><a className="link">قوانین و مقررات</a></Link></li>
            <li><Link href='/'><a className="link">سیاسیت محرمانگی</a></Link></li>
            <li><Link href='/'><a className="link">شرایط استفاده</a></Link></li>
            <li><Link href='/'><a className="link">همکاری با دامپزشک ها</a></Link></li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-2">
          <h2 className="mini-title">درباره</h2>
          <ul className="links">
            <li><Link href='/'><a className="link">تیم ما</a></Link></li>
            <li><Link href='/'><a className="link">فرصت های شغلی</a></Link></li>
            <li><Link href='/'><a className="link">همکاری با ما</a></Link></li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-2">
          <h2 className="mini-title">پشتیبانی</h2>
          <ul className="links">
            <li><Link href='/'><a className="link">تماس با ما</a></Link></li>
            <li><Link href='/'><a className="link">سوالات متداول</a></Link></li>
            <li><Link href='/'><a className="link">راهنمای سایت</a></Link></li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-2">
          <h2 className="mini-title">از تخفیف‌ها و جدیدترین‌های ما باخبر شوید:</h2>

          <TextField
        id="outlined-email-input"
        label="Email"
        // className={classes.textField}
        type="email"
        fullWidth

        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      

          <h2 className="mini-title">ما را در شبکه های اجتماعی دنبال کنید:</h2>

     <ul className="list-socials">
       <li>
       <Link href="/">
            <a>
              <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='510'
                viewBox='0 0 510 510'>
                <path d='M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z M255,153c56.1,0,102,45.9,102,102c0,56.1-45.9,102-102,102c-56.1,0-102-45.9-102-102C153,198.9,198.9,153,255,153z M63.75,459 C56.1,459,51,453.9,51,446.25V229.5h53.55C102,237.15,102,247.35,102,255c0,84.15,68.85,153,153,153c84.15,0,153-68.85,153-153 c0-7.65,0-17.85-2.55-25.5H459v216.75c0,7.65-5.1,12.75-12.75,12.75H63.75z M459,114.75c0,7.65-5.1,12.75-12.75,12.75h-51 c-7.65,0-12.75-5.1-12.75-12.75v-51c0-7.65,5.1-12.75,12.75-12.75h51C453.9,51,459,56.1,459,63.75V114.75z'
                  id='post-instagram' />
              </svg>
            </a>
          </Link>
       </li>
       {/* <li>
       <Link>
            <a >
              <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='510'
                viewBox='0 0 510 510'>
                <path d='M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z M255,153c56.1,0,102,45.9,102,102c0,56.1-45.9,102-102,102c-56.1,0-102-45.9-102-102C153,198.9,198.9,153,255,153z M63.75,459 C56.1,459,51,453.9,51,446.25V229.5h53.55C102,237.15,102,247.35,102,255c0,84.15,68.85,153,153,153c84.15,0,153-68.85,153-153 c0-7.65,0-17.85-2.55-25.5H459v216.75c0,7.65-5.1,12.75-12.75,12.75H63.75z M459,114.75c0,7.65-5.1,12.75-12.75,12.75h-51 c-7.65,0-12.75-5.1-12.75-12.75v-51c0-7.65,5.1-12.75,12.75-12.75h51C453.9,51,459,56.1,459,63.75V114.75z'
                  id='post-instagram' />
              </svg>
            </a>
          </Link>
       </li> */}
     </ul>

        </div>
      </div>

    </div>
  </footer>;
}

export default Footer;
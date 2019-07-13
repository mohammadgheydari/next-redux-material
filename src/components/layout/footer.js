import Link from 'next/link';

function Footer() {
    return <footer className="card dark">
      <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-md-3">
          <h2 className="mini-title">عنوان</h2> 
          <ul className="links">
            <li><Link href='/'><a className="link">لینک 1</a></Link></li>
            <li><Link href='/'><a className="link">لینک 1</a></Link></li>
            <li><Link href='/'><a className="link">لینک 1</a></Link></li>
            <li><Link href='/'><a className="link">لینک 1</a></Link></li>
          </ul> 
        </div>
        <div className="col-xs-12 col-md-3">
          <h2 className="mini-title">عنوان</h2> 
          <ul className="links">
            <li><Link href='/'><a className="link">لینک 1</a></Link></li>
            <li><Link href='/'><a className="link">لینک 1</a></Link></li>
            <li><Link href='/'><a className="link">لینک 1</a></Link></li>
            <li><Link href='/'><a className="link">لینک 1</a></Link></li>
          </ul> 
        </div>
        <div className="col-xs-12 col-md-3">
          <h2 className="mini-title">عنوان</h2> 
          <ul className="links">
            <li><Link href='/'><a className="link">لینک 1</a></Link></li>
            <li><Link href='/'><a className="link">لینک 1</a></Link></li>
            <li><Link href='/'><a className="link">لینک 1</a></Link></li>
            <li><Link href='/'><a className="link">لینک 1</a></Link></li>
          </ul> 
        </div>
        <div className="col-xs-12 col-md-3">
          <h2 className="mini-title">عنوان</h2> 
          <ul className="links">
            <li><Link href='/'><a className="link">لینک 1</a></Link></li>
            <li><Link href='/'><a className="link">لینک 1</a></Link></li>
            <li><Link href='/'><a className="link">لینک 1</a></Link></li>
            <li><Link href='/'><a className="link">لینک 1</a></Link></li>
          </ul> 
        </div>
        <div className="col-xs-12 col">
        <p className="text-center">
          1398 © تمامی حقوق این وبسایت برای ما محفوظ است.
        </p>
        </div>
      </div>
   
      </div>
      </footer>;
}

export default Footer;
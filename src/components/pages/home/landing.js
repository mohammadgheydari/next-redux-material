import { Security } from '@material-ui/icons'
const Features = [
    {
        icon: <Security />,
        title: 'لورم ایپسوم',
        content: "تیکا پرنده کوچولوی خوشگل و آوازخونیه که اهل سفره ولی کوچ نمی‌کنه"
    },
    {
        icon: <Security />,
        title: 'لورم ایپسوم',
        content: "تو شبکه اجتماعی تیکا می تونید هر تجربه‌ای از سفر رو با همه به اشتراک بذارید"
    },
    {
        icon: <Security />,
        title: 'لورم ایپسوم',
        content: "ما از اوناشیم که 24 ساعته آنلاینیم پشتیبان‌هامون زود سین می‌کنن زود هم جواب می‌دن"
    },
    {
        icon: <Security />,
        title: 'لورم ایپسوم',
        content: "می‌دونستید با هر ده ساعت پروازتون با تیکا، یه درخت به درختای زمین اضافه می‌کنید؟"
    },
];


function Landing() {
    return <div>
        <div className="container-fluid py-3">
            <div className="row my-5">
                <div className="col-xs-12 col-md-12 ">
                    <h2 className="text-center mb-4">ویژگی های ما</h2>
                </div>
                {
                    Features.map((item, index) => <div className='col-xs-12 col-md-3' key={index}>
                        <div className="card card-1 text-center px-3 py-4 usp mini-radius my-3 hoverable">
                            <div className="col-12 text-center icon my-2">
                                {item.icon}
                            </div>
                            <div className="col-12 mx-auto">
                                <h3 className="title">
                                    {item.title}
                                </h3>
                                <p className="text-muted mt-1 text-center readable">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
        <div className="container-fluid card dark py-3">
            <div className="row my-5">
                <div className="col-xs-12 col-md-12 ">
                    <h2 className="text-center mb-4">ویژگی های ما</h2>
                </div>
                {
                    Features.map((item, index) => <div className='col-xs-12 col-md-3' key={index}>
                        <div className="card card-1 text-center px-3 py-4 usp mini-radius my-3 hoverable">
                            <div className="col-12 text-center icon my-2">
                                {item.icon}
                            </div>
                            <div className="col-12 mx-auto">
                                <h3 className="title">
                                    {item.title}
                                </h3>
                                <p className="text-muted mt-1 text-center readable">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    </div>;
}

export default Landing;
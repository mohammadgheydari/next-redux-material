import Head from 'next/head'

function Meta(props) {
    return <Head>
        <meta charSet='utf-8' />
        <title>{props.title}</title>
        <meta name="keywords" content="خرید بلیط هواپیما,بلیط هواپیما خارجی ,خرید بلیط قطار,خرید بلیط چارتر,رزرو بلیط هواپیما,قیمت بلیط هواپیما,خرید اینترنتی بلیط هواپیما,پرواز چارتر,بلیط هواپیما چارتر,بلیط ارزان هواپیما ,بلیط چارتر هواپیما,پروازهای چارتر,خرید بلیط چارتر, رزرو هتل, رزرو هتل خارجی, خرید بلیط اتوبوس"/>
        <meta name="description" content="فلایتیو سامانه خرید اینترنتی بلیط هواپیما, بلیط قطار, بلیط اتوبوس و رزرو هتل است که بهترین پیشنهادات را برای شما ارایه می کند.  چمدان ها را ببندید."/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        {/* <meta name='viewport' content='initial-scale=1.0, width=device-width' /> */}
        <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
    </Head>;
}

export default Meta;
import Link from 'next/link'
import Fab from '@material-ui/core/Fab';

export default function Index() {
    return (
        <div>
            <h1>Hello Next.js 👋</h1>
            <Link href='/'><a>Home</a></Link>
            <Fab variant="extended" color="primary" className="px-4 py-0" size="small">
                ثبت نام
            </Fab>
        </div>
    )
}
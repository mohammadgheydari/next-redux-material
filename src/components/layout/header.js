import Link from 'next/link'

function Header() {
    return <header>
        <nav>
            <Link as={`/p/12`} href={`/post?title=${"test"}`}>
                <a>test</a>
            </Link>
            <Link href='/'><a>صفحه اصلی</a></Link> |
            <Link href='/about'><a>درباره ما</a></Link> |
            <Link href='/contact'><a>تماس با ما</a></Link>
        </nav>
    </header>;
}

export default Header;
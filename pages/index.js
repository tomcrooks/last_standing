import Link from 'next/link'

function home() {
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                <li>
                    <Link href="/fixtures">Fixtures</Link>
                </li>
                <li>
                    <Link href="/teams">Teams</Link>
                </li>
            </ul>
        </div>
    )
}

export default home;

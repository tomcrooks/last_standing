import Link from "next/link"

function fixtureList() {
    return (
        <div>
            <h1>List of fixtures</h1>
            <ul>
                <li>
                    <Link href="/fixtures/mnuche">Manchester United V Chelsea</Link>
                </li>
                <li>
                    <Link href="/fixtures/arstot">Arsenal V Tottenham Hotspur</Link>
                </li>
                <li>
                    <Link href="/fixtures/leibur">Leicester City V Burnley</Link>
                </li>
            </ul>
        </div >
    )
}

export default fixtureList;

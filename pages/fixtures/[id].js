import { useRouter } from 'next/router'
import Link from 'next/link'

function fixture() {
    const router = useRouter()
    console.log(router)

    return (
        <div>
            <h1>Fixture {router.query.id}</h1>
            <ul>

            </ul>
        </div>
    )
}

export default fixture;

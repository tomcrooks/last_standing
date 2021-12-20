import Link from 'next/link'

function Team(props) {
    const {
        id,
        name,
        abbreviation,
        image,
        form,
        opponent
    } = props;

    return (
        <li>
            <img src={`/${image}`} alt={name} />
            <div>
                <div>
                    <h2>{name}</h2>
                    <div>
                        <h2>{opponent}</h2>
                    </div>
                </div>
                <div>
                    <Link href={`/teams/${abbreviation}`}>View Opponent</Link>
                </div>
            </div>
        </li>
    )
}

export default Team;

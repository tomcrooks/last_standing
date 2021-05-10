import Link from "next/link"

function teamList() {
    const teams = [
        { name: "Manchester United", abbr: "MNU" },
        { name: "Tottenham Hotspur", abbr: "TOT" },
        { name: "Leicester City", abbr: "LEI" },
        { name: "Chelsea", abbr: "CHE" },
        { name: "Arsenal", abbr: "ARS" },
        { name: "Burnley", abbr: "BUR" },
    ]

    return (
        <div>
            <h1>List of teams</h1>
            <ul>
                {teams.map(team => (
                    <li>
                        <Link href={`/teams/${team.name}`}>{team.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default teamList;

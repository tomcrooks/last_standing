import Link from "next/link"
import TeamData from "../../team-data.json"
import TeamList from "../../components/teams/team-list"

function teamList() {

    return (
        <div>
            <h1>List of teams</h1>
            <TeamList teams={TeamData} />
            {/* {TeamData.map(team => (
                    <li>
                        <Link href={`/teams/${team.name}`}>{team.name}</Link>
                    </li>
                ))} */}
        </div>
    )
}

export default teamList;

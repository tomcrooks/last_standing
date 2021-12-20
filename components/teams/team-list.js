import Team from './team'

function TeamList(props) {
    const { teams } = props;

    return (
        <ul>
            {teams.map((team) => (
                <Team
                    key={team.id}
                    id={team.id}
                    name={team.name}
                    abbreviation={team.abbreviation}
                    image={team.image}
                    opponent={team.opponent}
                />
            ))}
        </ul>
    )
}

export default TeamList;

import { useEffect, useState } from "react";

function PointsTable() {
  const [teams, setTeams] = useState([]);

  // Fetch API data
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        // Sort by NRR (ascending)
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <table border="1" cellPadding="10" style={{ margin: "auto" }}>
      <thead>
        <tr>
          <th>Team</th>
          <th>Matches</th>
          <th>Won</th>
          <th>Lost</th>
          <th>Points</th>
          <th>NRR</th>
        </tr>
      </thead>

      <tbody>
        {teams.map((team) => (
          <tr key={team.id}>
            <td>{team.Team}</td>
            <td>{team.Matches}</td>
            <td>{team.Won}</td>
            <td>{team.Lost}</td>
            <td>{team.Points}</td>
            <td>{team.NRR}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PointsTable;

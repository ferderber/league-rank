import React from 'react';

const MasteryStats = ({stats}) => {
  const getAvg = (total) => (total / stats.numGames).toFixed(2);
  if (stats && stats.numGames > 0) 
    return (
      <div>
      <div className="stat-description">Average champion performance over {stats.numGames} recorded games</div>
      <table className="stat-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Win ratio</th>
            <td>{getAvg(stats.wins)}</td>
          </tr>
          <tr>
            <th>Kills</th>
            <td>{getAvg(stats.kills)}</td>
          </tr>
          <tr>
            <th>Deaths</th>
            <td>{getAvg(stats.deaths)}</td>
          </tr>
          <tr>
            <th>Assists</th>
            <td>{getAvg(stats.assists)}</td>
          </tr>
          <tr>
            <th>KDA</th>
            <td>{getAvg(stats.kda)}</td>
          </tr>
          <tr>
            <th>Wards placed</th>
            <td>{getAvg(stats.wardsPlaced)}</td>
          </tr>
          <tr>
            <th>Gold earned</th>
            <td>{getAvg(stats.goldEarned)}</td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  else 
    return (
      <span>Summoner hasn't played any games as this champion recently. Check back in an hour for detailed statistics about each Champion Mastery!</span>
    );
  }
;

export default MasteryStats;
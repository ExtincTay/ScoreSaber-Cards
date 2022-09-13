async function getScores() {
  const resp = await fetch('https://new.scoresaber.com/api/player/' + txtInp.value + '/full');
  const json = await resp.json();
  document.getElementById("rank").innerHTML += `<pre>${JSON.stringify(json.playerInfo.rank, null, 2)}</pre>`;
  document.getElementById("name").innerHTML += `<pre>${JSON.stringify(json.playerInfo.playerName, null, 2)}</pre>`;
	document.getElementById("Acc").innerHTML += `<pre>${JSON.stringify(json.scoreStats.averageRankedAccuracy, null, 2)}</pre>`;
}

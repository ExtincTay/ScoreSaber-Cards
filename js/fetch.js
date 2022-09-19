async function getScores() {
  const resp = await fetch('https://new.scoresaber.com/api/player/' + txtInp.value + '/full');
  const json = await resp.json();
  const playerName = json.playerInfo.playerName
  const playerNameNoQuotes = playerName.replace(/"/g, "");
  let textacc = json.scoreStats.averageRankedAccuracy;
  let resultacc = textacc.slice(0, 2);
  document.getElementById("rank").innerHTML += `<pre>${JSON.stringify(json.playerInfo.rank, null, 2)}</pre>`;
  document.getElementById("name").innerHTML += playerNameNoQuotes;
  document.getElementById("Acc").innerHTML += `<pre>${JSON.stringify(resultacc, null, 2)}</pre>`;
}

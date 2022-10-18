async function getScores() {
    const resp = await fetch('https://new.scoresaber.com/api/player/76561198352885497/full');
    const json = await resp.json();
    const playerName = json.playerInfo.playerName
    const playerNameNoQuotes = playerName.replace(/"/g, "");
    const flagcountry = json.playerInfo.country
    const capscountry = flagcountry.replace(/"/g, "");
    const country = capscountry.toLowerCase();
    let textaccavg = json.scoreStats.averageRankedAccuracy;
    let resultaccavg = textaccavg.toString().slice(0, 5);
    document.getElementById("rank").innerHTML += `<pre>${JSON.stringify(json.playerInfo.rank, null, 2)}</pre>`;
    document.getElementById("name").innerHTML += playerNameNoQuotes;
    document.getElementById("Acc").innerHTML += resultaccavg + "%";
    document.getElementById("flag").src = "https://flagcdn.com/w160/" + country + ".png";
  }
  
function calculate() {

  const sign = document.getElementById("sign").value.toLowerCase();
  const hobby = document.getElementById("hobby").value;

  const shy = Number(document.getElementById("shy").value);
  const active = Number(document.getElementById("active").value);
  const playful = Number(document.getElementById("playful").value);
  const neat = Number(document.getElementById("neat").value);
  const nice = Number(document.getElementById("nice").value);

  const politics = Number(document.getElementById("politics").value);
  const money = Number(document.getElementById("money").value);
  const environment = Number(document.getElementById("environment").value);
  const crime = Number(document.getElementById("crime").value);
  const entertainment = Number(document.getElementById("entertainment").value);
  const culture = Number(document.getElementById("culture").value);
  const food = Number(document.getElementById("food").value);
  const health = Number(document.getElementById("health").value);
  const fashion = Number(document.getElementById("fashion").value);
  const sports = Number(document.getElementById("sports").value);
  const paranormal = Number(document.getElementById("paranormal").value);
  const travel = Number(document.getElementById("travel").value);
  const work = Number(document.getElementById("work").value);
  const weather = Number(document.getElementById("weather").value);
  const animals = Number(document.getElementById("animals").value);
  const school = Number(document.getElementById("school").value);
  const toys = Number(document.getElementById("toys").value);
  const scifi = Number(document.getElementById("scifi").value);



  const rulesPrimary = {
    aries: "Popularity",
    taurus: "Fortune",
    gemini: "Knowledge",
    cancer: "Family",
    leo: "Popularity",
    virgo: "Knowledge",
    libra: "Romance",
    scorpio: "Romance",
    sagittarius: "Romance",
    capricorn: "Fortune",
    aquarius: "Knowledge",
    pisces: "Family"
  }

  const primary = rulesPrimary[sign];

  let score = {
    family: 0,
    romance: 0,
    knowledge: 0,
    popularity: 0,
    fortune: 0,
    pleasure: 0
  };


  const weightSign = {
    aries: { popularity: 2, pleasure: 1 },
    taurus: { fortune: 2, family: 1 },
    gemini: { knowledge: 2, romance: 1 },
    cancer: { family: 2, romance: 1 },
    leo: { popularity: 2 },
    virgo: { knowledge: 2 },
    libra: { romance: 2, popularity: 1 },
    scorpio: { romance: 2 },
    sagittarius: { pleasure: 2, knowledge: 1 },
    capricorn: { fortune: 2 },
    aquarius: { knowledge: 2, popularity: 1 },
    pisces: { family: 2, romance: 1 }
  };

  if (weightSign[sign]) {
    for (let asp in weightSign[sign]) {
        score[asp] += weightSign[sign][asp];
    }
}


  const weightHobby = {
    "arts&crafts": { romance: 1, knowledge: 1 },
    sports: { popularity: 1, pleasure: 1 },
    fitness: { popularity: 1, pleasure: 1 },
    cuisine: { family: 2, pleasure: 1 },
    games: { pleasure: 2 },
    science: { knowledge: 2 },
    "film&lit": { knowledge: 1, romance: 1 },
    nature: { family: 2 },
    "music&dance": { romance: 1, popularity: 1 },
    tinkering: { fortune: 1, popularity: 1 }
  };

  if (weightHobby[hobby]) {
    for (let asp in weightHobby[hobby]) {
      score[asp] += weightHobby[hobby][asp];
    }
  }

 
  if (shy > 6) {
    score.popularity += 2;
    score.romance += 1;
  }
 
  if (active > 6) score.pleasure += 1;
  if (playful < 6) { score.knowledge += 1; score.fortune += 1; }
  if (playful > 6) score.pleasure += 2;
  if (neat > 6) score.fortune += 1;
  if (nice > 6) score.family += 2;

  if (fashion > 6 || entertainment > 6) {
    score.popularity += 1;
    score.romance += 1;
  }
  if (scifi > 6 || paranormal > 6) score.knowledge += 1;
  if (politics > 6 || money > 6 || crime > 6) score.fortune += 1;
  if (environment > 6 || weather > 6) score.knowledge += 1;
  if (animals > 6) score.family += 1;
  if (work > 6 || health > 6) {
    score.knowledge += 1;
    score.fortune += 1;
  }
  if (school > 6 || culture > 6) score.knowledge += 1;
  if (sports > 6) score.pleasure += 1;
  if (travel > 6 || food > 6) score.pleasure += 1;

const allAspirations = Object.entries(score);

const secondaryCandidates = allAspirations.filter(([aspiration, value]) => aspiration !== primary.toLowerCase());

secondaryCandidates.sort((a, b) => b[1] - a[1]);

const secondary = secondaryCandidates[0] ? secondaryCandidates[0][0] : 'None'; 
{
    const secondaryDisplay = secondary.charAt(0).toUpperCase() + secondary.slice(1);

    document.getElementById("resultes").innerHTML =
        `🌟 Primary Aspiration: <b>${primary}</b>
        <br>🌟 Secondary Aspiration: <b>${secondaryDisplay}</b>`;
}

}
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  
  for (let i = 0; i < 4; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return arr;
}

function johnLennonFacts(facts) {
  var shoutedFacts = [];
  
  let i = 0;
  while (i < facts.length) {
    facts[i] = `${facts[i]} + !!!`;
    i++;
  }
}
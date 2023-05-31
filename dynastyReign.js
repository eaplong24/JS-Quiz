const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const startYear = 1000;

function longestDynasty(dynastyReign) {
  if (dynastyReign.length === 0) {
    return "No Data";
  }

  let longestName = "";
  let longestDuration = 0;

  for (let i = 0; i < dynastyReign.length; i++) {
    const [dynasty, romanYear] = dynastyReign[i];
    const year = convertYear(romanYear);

    if (year === undefined || year === null) {
      continue;
    }

    const duration = year - startYear;

    if (duration > longestDuration) {
      longestDuration = duration;
      longestName = dynasty;
    }
  }

  return longestName;
}

function convertYear(romanYear) {
  const regex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  if (!regex.test(romanYear)) {
    return "Invalid";
  }

  let result = 0;
  let prevValue = 0;

  for (let i = romanYear.length - 1; i >= 0; i--) {
    const current = romanNumerals[romanYear[i].toUpperCase()];

    if (current >= prevValue) {
      result += current;
    } else {
      result -= current;
    }

    prevValue = current;
  }

  return result;
}

const dynastyReign = [
  ["San Dynasty", "MXLI"],
  ["Viloria Dynasty", "MCCCIIII"],
  ["Tan Dynasty", "MCCCXCVIII"],
  ["Bon Dynasty", "MCDXLV"],
  ["Maiko Dynasty", "MDCLXIV"],
  ["Paul Dynasty", "MCMXLIX"],
  ["Andre Dynasty", "MMMXICX"],
];

const longest = longestDynasty(dynastyReign);
console.log("Longest Dynasty:", longest);

for (let i = 0; i < dynastyReign.length; i++) {
  const [dynasty, romanYear] = dynastyReign[i];
  const year = convertYear(romanYear);
  console.log(`Dynasty: ${dynasty} - Year: ${year}`);
}

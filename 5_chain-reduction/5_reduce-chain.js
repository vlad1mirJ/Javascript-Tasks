//Solution works assuming only english letters are user

//Answer to the question is 14508

const smallToBig = [
  "aA",
  "bB",
  "cC",
  "dD",
  "eE",
  "fF",
  "gG",
  "hH",
  "iI",
  "gG",
  "kK",
  "lL",
  "mM",
  "nN",
  "oO",
  "pP",
  "qQ",
  "rR",
  "sS",
  "tT",
  "uU",
  "vV",
  "wW",
  "xX",
  "yY",
  "zZ",
]

const bigToSmall = [
  "Aa",
  "Bb",
  "Cc",
  "Dd",
  "Ee",
  "Ff",
  "Gg",
  "Hh",
  "Ii",
  "Gg",
  "Kk",
  "Ll",
  "Mm",
  "Nn",
  "Oo",
  "Pp",
  "Qq",
  "Rr",
  "Ss",
  "Tt",
  "Uu",
  "Vv",
  "Ww",
  "Xx",
  "Yy",
  "Zz",
]

function reduceChain(str) {
  let currentStr = str

  bigToSmall.map((v) => {
    if (currentStr.includes(v)) {
      currentStr = currentStr.replace(v, "")
    }
  })

  smallToBig.map((v) => {
    if (currentStr.includes(v)) {
      currentStr = currentStr.replace(v, "")
    }
  })

  if (currentStr === str) {
    return currentStr.length
  } else {
    return reduceChain(currentStr)
  }
}

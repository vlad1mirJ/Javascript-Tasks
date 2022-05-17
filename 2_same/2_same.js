function same(str) {
  const s = str.toLowerCase()
  if (!s.includes("d") && !s.includes("k")) {
    return true
  } else {
    const dNum = s.split("").filter((l) => l === "d").length
    const kNum = s.split("").filter((l) => l === "k").length
    return dNum === kNum
  }
}

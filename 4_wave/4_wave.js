function wave(str) {
  let arrOfWords = []
  const arr = str.split("")
  const cleanArr = arr
    .map((c, i) => c !== " " && [c, i])
    .filter((c) => c !== false)
  cleanArr.forEach((l) => (arrOfWords = [...arrOfWords, str]))

  const res = cleanArr.map((a, i) => {
    const word = arrOfWords[i]
    const replaced =
      word.substring(0, a[1]) + a[0].toUpperCase() + str.substring(a[1] + 1)

    return replaced
  })

  return res
}

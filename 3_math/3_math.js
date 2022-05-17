function math(...numbers) {
  const pwt = numbers.map((num) => num * num)
  const sum = pwt.reduce((a, b) => a + b)
  const sqrt = Math.sqrt(sum)
  const half = sqrt / 2
  const res = Math.floor(half)
  return res
}

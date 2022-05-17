function number(numbers) {
  const avg = numbers.reduce((a, b) => a + b) / numbers.length
  return Math.round(avg)
}

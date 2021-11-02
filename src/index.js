
const gcd = (a, b) => {
  if (a % b === 0) return b;
  return gcd(b, a % b);
}

console.log(gcd(28, 100));

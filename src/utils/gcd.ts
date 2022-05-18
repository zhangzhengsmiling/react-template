const gcd = (a: number, b: number): number => {
  if (a % b === 0) return b;
  return gcd(b, a % b);
};

export default gcd;

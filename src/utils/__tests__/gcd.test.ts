import gcd from '../gcd';

describe('module gcd:', () => {
  it('module import:', () => {
    expect(gcd).toBeInstanceOf(Function);
  });

  it('greatest common divider:', () => {
    const result = gcd(28, 100);
    expect(result).toBe(4);
  });
});

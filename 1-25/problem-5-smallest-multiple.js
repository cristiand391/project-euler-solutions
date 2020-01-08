function smallestMult(n) {
  function gcd(a, b) {
    let temp = null;
    while (b) {
      temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  if (n < 1) return false;

  let lcmMem = 1;

  for (let i = 2; i <= n; i++) {
    lcmMem = lcm(lcmMem, i);
  }
  return lcmMem;
}

smallestMult(20);

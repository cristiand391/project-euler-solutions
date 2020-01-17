function specialPythagoreanTriplet(n) {
  const { sqrt, pow } = Math;
  let sumOfabc = n,
    c;

  function getC(a, b) {
    c = sqrt(pow(a, 2) + pow(b, 2));
    return Number.isInteger(c) ? c : false;
  }

  for (let a = 1; ; a++) {
    for (let b = 2; b < a; b++) {
      c = getC(a, b);
      if (c && a + b + c === sumOfabc) return a * b * c;
    }
  }
}

specialPythagoreanTriplet(1000);

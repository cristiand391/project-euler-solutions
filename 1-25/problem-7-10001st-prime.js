function nthPrime(n) {
  if (n === 0) return false;

  let primes = [2, 3, 5, 7, 11, 13],
    a = 13;

  while (!primes[n - 1]) {
    a += 2;
    if (primes.every(p => a % p !== 0)) primes.push(a);
  }
  return a;
}

nthPrime(10001);

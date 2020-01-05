function largestPrimeFactor(number) {
  if (!Number.isInteger(number) || number < 1) return false;

  let n = 2;

  while (number != 1) {
    (number % n == 0 && (number /= n)) || n++;
  }
  return n;
}

largestPrimeFactor(13195);

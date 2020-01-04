function fiboEvenSum(n) {
  let a = 1,
    b = 2,
    next = 3,
    sum = 2;

  while (n != 3) {
    a = next;
    next = b + next;
    if (next % 2 == 0) sum += next;
    b = a;
    n--;
  }
  return sum;
}

fiboEvenSum(10);

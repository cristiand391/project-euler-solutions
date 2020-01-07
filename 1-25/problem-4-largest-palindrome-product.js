function largestPalindromeProduct(n) {
  const isPalindrome = p => {
    p = p.toString();
    let m = Math.trunc(p.length / 2);
    return p.endsWith([...p.slice(0, m)].reverse().join(""));
  }

  let f1 = "9".repeat(n),
    f2 = f1,
    limit = 9 * Math.pow(10, n - 1);

  for (let product = 0; f1 > limit; f2--) {
    product = f1 * f2;

    if (isPalindrome(product)) return product;
    if (f2 == limit)  f2 = f1--;
  }
}

largestPalindromeProduct(3);

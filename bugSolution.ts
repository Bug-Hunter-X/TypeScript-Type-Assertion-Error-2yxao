function combine(a: number, b: string): number {
  // Solution 1: Type assertion (use with caution)
  // return a + Number(b);

  // Solution 2: Type guard
  if (typeof b === 'string') {
    const numB = parseFloat(b);
    if (!isNaN(numB)) {
        return a + numB;
    }
    else {
        throw new Error('Cannot convert b to a number');
    }
  }
  return a + b as number; //this will return an error
}
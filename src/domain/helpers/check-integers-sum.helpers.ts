export const checkIntegersSum = (
  arrIntegers: number[],
  valueWanted: number,
): boolean => {
  const findPossibleValues: Set<number> = new Set();
  const countIntegers: number = arrIntegers.length;

  findPossibleValues.add(valueWanted - arrIntegers[0]);

  for (let i = 1; i < countIntegers; i++) {
    const possibleValue: number = valueWanted - arrIntegers[i];
    if (findPossibleValues.has(arrIntegers[i])) {
      return true;
    } else {
      findPossibleValues.add(possibleValue);
    }
  }

  return false;
};

import { expect } from 'chai';
import { checkIntegersSum } from '../../src/domain/helpers/check-integers-sum.helpers';
describe('Checks whether there are two integers in the list, that the sum equals the desired value (unit)', () => {
  it('return true', async () => {
    const arrIntegers = [1, 3, 5, 9, 7, 11, 23];
    const valueWanted = 10;
    expect(checkIntegersSum(arrIntegers, valueWanted)).to.be.true;
  });
  it('return true', async () => {
    const arrIntegers = [1, 3, 5, 4, 7, 11, 23];
    const valueWanted = 27;
    expect(checkIntegersSum(arrIntegers, valueWanted)).to.be.true;
  });
  it('return true', async () => {
    const arrIntegers = [19, 1, 3, 5, 4, 7, 11, 23];
    const valueWanted = 20;
    expect(checkIntegersSum(arrIntegers, valueWanted)).to.be.true;
  });

  it('return false', async () => {
    const arrIntegers = [10, 4, 3, 5, 9, 7, 11, 23];
    const valueWanted = 3;
    expect(checkIntegersSum(arrIntegers, valueWanted)).to.be.false;
  });

  it('return false', async () => {
    const arrIntegers = [10, 4, 5, 9, 7, 11, 23];
    const valueWanted = 10;
    expect(checkIntegersSum(arrIntegers, valueWanted)).to.be.false;
  });

  it('return false', async () => {
    const arrIntegers = [10, 4, 3, 5, 9, 7, 11, 23];
    const valueWanted = 31;
    expect(checkIntegersSum(arrIntegers, valueWanted)).to.be.false;
  });
});

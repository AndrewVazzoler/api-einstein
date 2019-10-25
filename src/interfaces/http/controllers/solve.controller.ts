import { checkIntegersSum } from '../../../domain/helpers/check-integers-sum.helpers';

export const solveIntegers = (req, res) => {
  const { arrIntegers, valueWanted } = req.body;

  try {
    if (!arrIntegers || !valueWanted) {
      throw new Error('Must enter arrIntegers and valueWanted');
    }

    const hasValue = checkIntegersSum(arrIntegers, valueWanted);

    if (hasValue) {
      return res.json({
        message: 'With the integers passed it is possible to do the operation',
        status: 'success',
      });
    }

    return res.json({
      message: 'With integers passed it is not possible to do the operation',
      status: 'failed',
    });
  } catch (error) {
    return res.json({
      message: error.message,
      status: 'error',
    });
  }
};

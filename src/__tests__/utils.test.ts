import axios from 'axios';
import { APIs } from '../utils/apis';
import { DateFunctions } from '../utils/dateFunctions';
import { IUtils, utils } from '../utils/utils';

jest.mock('axios');

interface ITestVariables {
  utils: IUtils;
}

const testVariables: ITestVariables = {
  utils: utils,
};

describe('utils', () => {
  beforeAll(() => {});

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('DateFunctions', () => {
    const dateFunctions = testVariables.utils.dateFunctions;

    describe('normalize', () => {
      it('normalizeValue will return 2 length result', () => {
        const one = dateFunctions.normalizeValue('1');
        const two = dateFunctions.normalizeValue('11');

        expect(one.length).toBe(2);
        expect(two.length).toBe(2);
      });
    });

    describe('getBaseTime', () => {
      it('if minutes<10, return previousData', () => {
        const array = [
          ['1', '5'],
          ['3', '5'],
          ['6', '5'],
          ['9', '5'],
          ['12', '5'],
          ['15', '5'],
          ['18', '5'],
          ['21', '5'],
          ['23', '5'],
        ].map((timeSet: Array<string>) => dateFunctions.getBaseTime(timeSet[0], timeSet[1]));

        expect(array).toEqual([
          ['2300', true],
          ['0200', false],
          ['0500', false],
          ['0800', false],
          ['1100', false],
          ['1400', false],
          ['1700', false],
          ['2000', false],
          ['2000', false],
        ]);
      });

      it('if minutes>10, get currentData', () => {
        const array = [
          ['1', '15'],
          ['2', '15'],
          ['5', '15'],
          ['8', '15'],
          ['11', '15'],
          ['14', '15'],
          ['17', '15'],
          ['20', '15'],
          ['23', '15'],
        ].map((timeSet: Array<string>) => dateFunctions.getBaseTime(timeSet[0], timeSet[1]));

        expect(array).toEqual([
          ['2300', true],
          ['0200', false],
          ['0500', false],
          ['0800', false],
          ['1100', false],
          ['1400', false],
          ['1700', false],
          ['2000', false],
          ['2300', false],
        ]);
      });
    });

    describe('getBaseDate', () => {
      describe('before2 === true', () => {
        it('date>1, return yesterday', () => {
          const result = dateFunctions.getBaseDate('2022', '01', '02', true);

          expect(result).toBe('20220101');
        });

        it('date===1 && month>1, return last month', () => {
          const result = dateFunctions.getBaseDate('2022', '02', '01', true);

          expect(result).toBe('20220131');
        });

        it('date===1 && month===1, last year', () => {
          const result = dateFunctions.getBaseDate('2022', '01', '01', true);

          expect(result).toBe('20211231');
        });
      });

      describe('before2 === false', () => {
        it('return normalized date', () => {
          const result = dateFunctions.getBaseDate('2022', '3', '8', false);

          expect(result).toBe('20220308');
        });
      });
    });

    describe('getValidTimeArgs', () => {
      const date = new Date();
      const result = dateFunctions.getValidTimeArgs(date);
      const baseDate = result[0];
      const baseTime = result[1];

      it('result should be array of string', () => {
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBe(2);
        expect(result.filter((elem) => typeof elem === 'string').length).toBe(result.length);
      });

      describe('baseTime', () => {
        it('second element of result is baseTime, 4 length', () => {
          expect(baseTime.length).toBe(4);
        });

        it("baseTime should be one of ['0200', '0500', '0800', '1100', '1400', '1700', '2000', '2300']", () => {
          const resultArray = ['0200', '0500', '0800', '1100', '1400', '1700', '2000', '2300'];
          const check = resultArray.includes(baseTime);

          expect(check).toBe(true);
        });
      });

      describe('baseDate', () => {
        it('first element of result is baseDate, 8 length', () => {
          expect(baseDate.length).toBe(8);
        });
      });
    });
  });

  describe('apis', () => {
    const apis = testVariables.utils.apis;
    describe('getTemperature', () => {
      it('if invalidTime, throw error', async () => {
        await expect(apis.getTemperature('1', '1', '11111111', '1')).rejects.toThrow('invalid time');
      });

      it('if invalidTime, throw error', async () => {
        await expect(apis.getTemperature('1', '1', '1', '1111')).rejects.toThrow('invalid date');
      });

      it('if success, return json', async () => {
        (axios.get as jest.Mock).mockImplementation(() => {
          return { dummy: 'data' };
        });
        const result = await apis.getTemperature('1', '1', '11111111', '1111');

        expect(result).toBeTruthy();
      });

      it('if fail, return empty object', async () => {
        (axios.get as jest.Mock).mockImplementation(() => {
          throw Error('dummy error');
        });

        await expect(apis.getTemperature('1', '1', '11111111', '1111')).resolves.toEqual({});
      });
    });
  });
});

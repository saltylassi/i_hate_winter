import { APIs, IAPIs } from './apis';
import { DateFunctions, IDateFunctions } from './dateFunctions';
import { functions, IFunctions } from './functions';

export interface IUtils {
  dateFunctions: IDateFunctions;
  apis: IAPIs;
  functions: IFunctions;
}

export const utils: IUtils = {
  dateFunctions: new DateFunctions(),
  apis: new APIs(),
  functions: new functions(),
};

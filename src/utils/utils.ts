import { APIs, IAPIs } from './apis';
import { DateFunctions, IDateFunctions } from './dateFunctions';

export interface IUtils {
  dateFunctions: IDateFunctions;
  apis: IAPIs;
}

export const utils: IUtils = {
  dateFunctions: new DateFunctions(),
  apis: new APIs(),
};

// export class Utils implements IUtils {
//   public dateFunctions: IDateFunctions;
//   public apis: IAPIs;
//   constructor(DateFunctions: IDateFunctions, API: IAPIs) {
//     this.dateFunctions = DateFunctions;
//     this.apis = API;
//   }
// }

import { IAPIs } from './apis';
import { IDateFunctions } from './dateFunctions';

export interface IUtils {
  dateFunctions: IDateFunctions;
  apis: IAPIs;
}

export class Utils implements IUtils {
  public dateFunctions: IDateFunctions;
  public apis: IAPIs;
  constructor(DateFunctions: IDateFunctions, API: IAPIs) {
    this.dateFunctions = DateFunctions;
    this.apis = API;
  }
}

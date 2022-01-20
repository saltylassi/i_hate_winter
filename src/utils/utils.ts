import { IDateFunctions } from './dateFunctions';

export interface IUtils {
  getDateFunctions: () => IDateFunctions;
}

export class Utils implements IUtils {
  constructor(private DateFunctions: IDateFunctions) {}

  public getDateFunctions() {
    return this.DateFunctions;
  }
}

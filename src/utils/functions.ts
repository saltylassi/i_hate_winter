export interface IFunctions {
  getBGColor: (temperature: number) => string;
}

export class functions implements IFunctions {
  constructor() {}

  getBGColor(temperature: number) {
    if (temperature > 0) {
      return 'white';
    } else {
      return 'blue';
    }
  }
}

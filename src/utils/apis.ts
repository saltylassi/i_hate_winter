export interface IAPIs {
  getTemperature(key: string, nx: string, ny: string, baseDate: string, baseTime: string): any;
}

export class APIs implements IAPIs {
  constructor() {}

  public getTemperature(key: string, nx: string, ny: string, baseDate: string, baseTime: string) {
    return {};
  }
}

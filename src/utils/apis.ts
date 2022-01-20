import axios from 'axios';

export interface IAPIs {
  getTemperature(nx: string, ny: string, baseDate: string, baseTime: string): any;
}

export class APIs implements IAPIs {
  constructor() {}

  public async getTemperature(nx: string, ny: string, baseDate: string, baseTime: string) {
    if (baseDate.length !== 8) {
      throw new Error('invalid date');
    }
    if (baseTime.length !== 4) {
      throw new Error('invalid time');
    }

    const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=zPySceHXWjyPBQrkYAejlGu7cSQttFs9qZIE5AYuv9T5%2BbXDTTYgVgi7fn9ypEYLcYAYU4uy%2BQrcrfesCrWltw%3D%3D&pageNo=1&numOfRows=150&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${nx}&ny=${ny}`;

    try {
      const response = await axios.get(url);
      return response.data.response.body.items.item;
    } catch (error) {
      console.log(error);
      return {};
    }
  }
}

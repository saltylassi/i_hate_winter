export interface IDateFunctions {
  getValidTimeArgs(currentTime: Date): Array<string>;
  normalizeValue(time: string): string;
  getBaseTime(hours: string, minutes: string): [string, boolean];
  getBaseDate(years: string, month: string, date: string, before2: boolean): string;
}

export class DateFunctions implements IDateFunctions {
  constructor() {}

  public normalizeValue(time: string): string {
    if (time.length === 1) {
      return `0${time}`;
    } else {
      return time;
    }
  }

  public getBaseTime(hours: string, minutes: string): [string, boolean] {
    let before2: boolean = false; // 전일 23시로
    let flag = Number(hours) * 100 + Number(minutes);
    let numberTypeHours: number = 0;

    if (flag < 210) {
      before2 = true;
      numberTypeHours = 23;
    } else if (flag < 510) {
      numberTypeHours = 2;
    } else if (flag < 810) {
      numberTypeHours = 5;
    } else if (flag < 1110) {
      numberTypeHours = 8;
    } else if (flag < 1410) {
      numberTypeHours = 11;
    } else if (flag < 1710) {
      numberTypeHours = 14;
    } else if (flag < 2010) {
      numberTypeHours = 17;
    } else if (flag < 2310) {
      numberTypeHours = 20;
    } else {
      numberTypeHours = 23;
    }

    return [this.normalizeValue(numberTypeHours.toString()) + '00', before2];
  }

  getBaseDate(years: string, month: string, date: string, before2: boolean): string {
    let baseDate = '';
    const dateArray = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
    //0201,0101

    if (before2 === true) {
      if (date === '01') {
        let validYear = '';
        let validMonth = '';
        let validDate = '';
        if (month === '01') {
          validYear = (Number(years) - 1).toString();
          validMonth = '12';
          validDate = dateArray[Number(validMonth) - 1];
        } else {
          validYear = years;
          validMonth = this.normalizeValue((Number(month) - 1).toString());
          validDate = dateArray[Number(validMonth) - 1];
        }

        baseDate = validYear + validMonth + validDate;
      } else {
        baseDate = years + this.normalizeValue(month) + this.normalizeValue((Number(date) - 1).toString());
      }
    } else {
      baseDate = years + this.normalizeValue(month) + this.normalizeValue(date);
    }
    return baseDate;
  }

  public getValidTimeArgs(currentTime: Date): Array<string> {
    const years = currentTime.getFullYear();
    const month = currentTime.getMonth() + 1;
    const date = currentTime.getDate();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    const [baseTime, before2] = this.getBaseTime(hours.toString(), minutes.toString());
    const baseDate = this.getBaseDate(years.toString(), month.toString(), date.toString(), before2);

    return [baseDate, baseTime];
  }
}

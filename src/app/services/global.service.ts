import { Injectable } from '@angular/core';
import { DatesInterface } from '../interfaces/Dates.interface';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  private apiKey = '1de6ce733dd02d81073262cb66031536';

  getApiKey(): string {
    return this.apiKey;
  }

  getHeaders(page?: string): HttpParams {

    let params = new HttpParams()
      .append('api_key', this.apiKey)
      .append('language', 'es')

    if (page !== undefined || page !== null || page !== "")
      params.append('page', page)

    return params;
  }

  // Private Methods
  private numberWeek(currentDay: number): string {

    if (currentDay === 1 || currentDay <= 7)
      return 'one'
    else if (currentDay === 8 || currentDay <= 14)
      return 'two'
    else if (currentDay === 15 || currentDay <= 21)
      return 'three'
    else if (currentDay === 22 || currentDay <= 31)
      return 'four'
  }

  getDates(): DatesInterface {

    const currentDay = new Date().getDate();
    // const currentDay = 25;
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    let firstDate: string = '';
    let lastDate: string = '';

    let myDates: DatesInterface = {
      firstDate: '',
      lastDate: ''
    }

    if (this.numberWeek(currentDay) === 'one') {

      firstDate = `${currentYear}-${currentMonth}-01`;
      lastDate = `${currentYear}-${currentMonth}-07`;

    }
    else if (this.numberWeek(currentDay) === 'two') {


      firstDate = `${currentYear}-${currentMonth}-08`;
      lastDate = `${currentYear}-${currentMonth}-14`;

    }
    else if (this.numberWeek(currentDay) === 'three') {


      firstDate = `${currentYear}-${currentMonth}-15`;
      lastDate = `${currentYear}-${currentMonth}-21`;

    }
    else if (this.numberWeek(currentDay) === 'four') {


      firstDate = `${currentYear}-${currentMonth}-22`;

      if (currentMonth === 1 || currentMonth === 3 ||
        currentMonth === 5 || currentMonth === 7 ||
        currentMonth === 8 || currentMonth === 10 ||
        currentMonth === 12)
        lastDate = `${currentYear}-${currentMonth}-31`;
      else
        lastDate = `${currentYear}-${currentMonth}-30`;


    }

    myDates.firstDate = firstDate
    myDates.lastDate = lastDate


    return myDates;

  }
}

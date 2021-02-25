import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpParams } from "@angular/common/http";

import Swal from "sweetalert2";

import { dataCalendar } from "../Data/calendar";
import { Calendar } from "../interfaces/Calendar.interface";
import { Observable, throwError } from "rxjs";
import { TrackHttpError } from "../interfaces/error/track-http-error";
import { DatesInterface } from "../interfaces/Dates.interface";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  constructor() {}

  private apiKey = "1de6ce733dd02d81073262cb66031536";

  getApiKey(): string {
    return this.apiKey;
  }

  getHeaders(): HttpParams {
    let params = new HttpParams()
      .append("api_key", this.apiKey)
      .append("language", "es");

    return params;
  }

  sweetAlert(title: string, subtitle: string, type: SweetAlertType) {
    return Swal.fire(title, subtitle, type);
  }

  handleHttpError(error: HttpErrorResponse): Observable<TrackHttpError> {
    // console.log(error.error);
    const messageError = error.error?.error ?? error.statusText; 
    console.log(messageError);
    
    this.sweetAlert("Error",error.error?.error , "error");
    // let data = new TrackHttpError();
    // data.errorNumber = error.status;
    // data.message = error.statusText;
    // data.messageFriendly = "An error on occured retrienving data.";

    return throwError(error);
  }

  getDateStart_DateEnd(): Calendar {
    const currentMonth = new Date().getMonth() + 1 + "";
    let calendar: Calendar;

    dataCalendar.forEach((element: Calendar) => {
      if (element.month === currentMonth) {
        calendar = element;
      }
    });
    // calendar
    return calendar;
  }
  getNextMonth(): Calendar {
    let currentMonth = new Date().getMonth() + 1;
    currentMonth++;

    let calendar: Calendar;

    dataCalendar.forEach((element: Calendar) => {
      if (element.month === currentMonth + "") {
        calendar = element;
      }
    });
    // calendar
    return calendar;
  }

  // Private Methods
  private numberWeek(currentDay: number): string {
    if (currentDay === 1 || currentDay <= 7) return "one";
    else if (currentDay === 8 || currentDay <= 14) return "two";
    else if (currentDay === 15 || currentDay <= 21) return "three";
    else if (currentDay === 22 || currentDay <= 31) return "four";
  }

  getDates(): DatesInterface {
    const currentDay = new Date().getDate();
    // const currentDay = 25;
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    let firstDate: string = "";
    let lastDate: string = "";

    let myDates: DatesInterface = {
      firstDate: "",
      lastDate: "",
    };

    if (this.numberWeek(currentDay) === "one") {
      firstDate = `${currentYear}-${currentMonth}-01`;
      lastDate = `${currentYear}-${currentMonth}-07`;
    } else if (this.numberWeek(currentDay) === "two") {
      firstDate = `${currentYear}-${currentMonth}-08`;
      lastDate = `${currentYear}-${currentMonth}-14`;
    } else if (this.numberWeek(currentDay) === "three") {
      firstDate = `${currentYear}-${currentMonth}-15`;
      lastDate = `${currentYear}-${currentMonth}-21`;
    } else if (this.numberWeek(currentDay) === "four") {
      firstDate = `${currentYear}-${currentMonth}-22`;

      if (
        currentMonth === 1 ||
        currentMonth === 3 ||
        currentMonth === 5 ||
        currentMonth === 7 ||
        currentMonth === 8 ||
        currentMonth === 10 ||
        currentMonth === 12
      )
        lastDate = `${currentYear}-${currentMonth}-31`;
      else lastDate = `${currentYear}-${currentMonth}-30`;
    }

    myDates.firstDate = firstDate;
    myDates.lastDate = lastDate;

    return myDates;
  }
}

export type SweetAlertType =
  | "success"
  | "error"
  | "warning"
  | "question"
  | "info";

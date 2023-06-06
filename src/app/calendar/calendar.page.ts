import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { addMonths, subMonths, addYears, subYears } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  CalendarView = CalendarView;
  events: string[] = [];

  constructor() { }

  ngOnInit() {
    // Carga los eventos aquí
  }

  goBack() {
    // Navega de vuelta a la página anterior
  }

  nextDay() {
    this.viewDate = addMonths(this.viewDate, 1);
  }

  prevDay() {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  nextMonth() {
    this.viewDate = addMonths(this.viewDate, 1);
  }

  prevMonth() {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  nextYear() {
    this.viewDate = addYears(this.viewDate, 1);
  }

  prevYear() {
    this.viewDate = subYears(this.viewDate, 1);
  }
}

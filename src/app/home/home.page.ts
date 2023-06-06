import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  tasks: string[] = ['Cambiar pañales', 'Alimentar al bebé', 'Pasear al bebé'];
  newTask!: string;

  constructor(private router: Router) {}

  navigateToCalendar() {
    this.router.navigate(['/calendar']);
  }


  navigateToTaskDetails(task: string) {
    this.router.navigate(['/task-details', task]);
  }


  addTask() {
    if (this.newTask) {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }
}


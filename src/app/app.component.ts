import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  constructor(private router: Router) {}

  navigateTo(page: string, task?:string) {
    if (task){
      this.router.navigate([`/${page}`, task]);
    } else {
      this.router.navigate([`/${page}`]);
    }
  }
}

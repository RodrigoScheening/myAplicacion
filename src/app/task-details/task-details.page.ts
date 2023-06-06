import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {

  task!: string | null;
  fecha!: string;
  prioridad!: string;
  descripcion!: string;
  papaPrimerizo!: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.task = this.route.snapshot.paramMap.get('task');
    this.fecha = 'Fecha de la tarea'; // Asigna el valor correspondiente
    this.prioridad = 'Prioridad de la tarea'; // Asigna el valor correspondiente
    this.descripcion = 'Descripción de la tarea'; // Asigna el valor correspondiente
    this.papaPrimerizo = 'Nombre del papá primerizo';
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
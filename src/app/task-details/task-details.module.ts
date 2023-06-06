import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TaskDetailsPageRoutingModule } from './task-details-routing.module';
import { TaskDetailsPage } from './task-details.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TaskDetailsPageRoutingModule
  ],
  declarations: [TaskDetailsPage],
  exports: [TaskDetailsPage]
})
export class TaskDetailsPageModule {}


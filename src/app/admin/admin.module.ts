// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

// Services
import { DashboardService } from '../services/dashboard.service';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';

import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [    
    DashboardComponent,
    MyProfileComponent,
    ProjectsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DashboardComponent, MyProfileComponent
  ],
  providers: [DashboardService]
})
export class AdminModule { }

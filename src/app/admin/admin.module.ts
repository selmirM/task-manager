// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

// Services
import { DashboardService } from '../dashboard.service';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [    
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DashboardComponent, MyProfileComponent, AboutComponent
  ],
  providers: [DashboardService]
})
export class AdminModule { }

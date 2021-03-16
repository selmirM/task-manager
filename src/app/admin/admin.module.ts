// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { DashboardService } from '../dashboard.service';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';




@NgModule({
  declarations: [    
    DashboardComponent,
    AboutComponent,
    MyProfileComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent, MyProfileComponent, AboutComponent
  ],
  providers: [DashboardService]
})
export class AdminModule { }

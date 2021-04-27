import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { CanActivateGuardService } from './services/can-activate-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate: [ CanActivateGuardService ] , data: { expectedRole: "Admin" } },
    {path: 'projects', component: ProjectsComponent, canActivate: [ CanActivateGuardService ], data: { expectedRole: "Admin" }},
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule { }

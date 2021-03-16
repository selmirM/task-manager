import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
projects: Project[] = [];
newProject: Project = new Project();

  constructor(private projectsScv:ProjectsService) { }

  ngOnInit() {
    this.projectsScv.getAllProjects().subscribe(res => {
      this.projects = res;
    });
  }

  onSave() {
    this.projectsScv.insertProject(this.newProject).subscribe((response => {
      this.newProject = response;
      this.projects.push(this.newProject);
      this.newProject.projectID = null;
      this.newProject.projectName = null;
      this.newProject.dateOfStart = null;
      this.newProject.teamSize = null;
    } ), (error => {
      console.log(error);
    }));
  }

}



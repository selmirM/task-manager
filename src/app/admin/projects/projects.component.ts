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
// tempProject: Project = new Project();
// tempProject2: Project = new Project();
currentProject: Project = new Project();
currentIndex: number;
searchBy: string = "ProjectID";
searchText: string = "";

  constructor(private projectsScv:ProjectsService) { }

  ngOnInit() {
    //this.projects.push(...[this.tempProject, this.tempProject2]);
    this.projectsScv.getAllProjects().subscribe(
    res => {
      this.projects = res;
    });
  }

  onSave() {
    this.projectsScv.insertProject(this.newProject).subscribe((response => {
      let p:Project = new Project();
      p.projectID = response.projectID;
      p.projectName = response.projectName;
      p.dateOfStart = response.dateOfStart;
      p.teamSize = response.teamSize;
      this.projects.push(p);

      //Clear New Project Grid
      this.newProject.projectID = null;
      this.newProject.projectName = null;
      this.newProject.dateOfStart = null;
      this.newProject.teamSize = null;
    } ), (error => {
      console.log(error);
    }));
  }

  onEdit(projectIndex) {
    this.currentIndex = projectIndex;
    this.currentProject.projectID = this.projects[projectIndex].projectID;
    this.currentProject.projectName = this.projects[projectIndex].projectName;
    this.currentProject.dateOfStart = this.projects[projectIndex].dateOfStart;
    this.currentProject.teamSize = this.projects[projectIndex].teamSize;

  }

  onUpdate() {
    this.projectsScv.updateProject(this.currentProject).subscribe(
    (response)=> {
      let p = new Project();
      p.projectID = response.projectID;
      p.projectName = response.projectName;
      p.dateOfStart = response.dateOfStart;
      p.teamSize = response.teamSize;
      this.projects[this.currentIndex] = p;

      // Clear update grid
      this.currentProject.projectID =  null;
      this.currentProject.projectName =  null;
      this.currentProject.dateOfStart =  null;
      this.currentProject.teamSize = null;
    }, 
    
    (error)=> {
      console.log(error);
    });
  }

  onRemoveClick(projectIndex) {
    this.currentIndex = projectIndex;
    this.currentProject.projectID = this.projects[projectIndex].projectID;
    this.currentProject.projectName = this.projects[projectIndex].projectName;
  }

  onRemove() {
    this.projectsScv.deleteProject(this.projects[this.currentIndex].projectID).subscribe(
    (response) => {
      console.log('Response', response);
    },
    (error) => {
      console.log(error);
    });

    this.projects.splice(this.currentIndex, 1)
  }

  onSearch() {
    this.projectsScv.searchProject(this.searchBy, this.searchText).subscribe(
      (response: Project[]) => {this.projects = response;}, 
      (err)=> { console.log("Error:", err) }
      );
  }

}



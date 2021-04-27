import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientLocation } from 'src/app/models/client-location';
import { ClientLocationsService } from 'src/app/services/client-locations.service';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';
import  * as $ from 'jquery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
projects: Project[] = [];
clientLocations: ClientLocation[] = [];
showLoading: boolean = true;
newProject: Project = new Project();
currentProject: Project = new Project();
currentIndex: number;
searchBy: string = "ProjectID";
searchText: string = "";

@ViewChild("newForm") newForm: NgForm;
@ViewChild("editForm") editForm: NgForm;

  constructor(private projectsScv:ProjectsService, private clientLocationsScv: ClientLocationsService) { }

  ngOnInit() {
    //this.projects.push(...[this.tempProject, this.tempProject2]);
    this.projectsScv.getAllProjects().subscribe(
    res => {
      this.projects = res;
      this.showLoading = false;
    });

    this.clientLocationsScv.getClientLocations().subscribe(
      (res: ClientLocation[]) => {
        this.clientLocations = res;
      }
    );
  }

  onNewClick(event) {
    this.newForm.resetForm();

  }

  onSave() {
    if(this.newForm.valid) {
      console.log("new project",this.newProject );
      this.newProject.clientLocation.clientLocationID = 0;
      this.projectsScv.insertProject(this.newProject).subscribe((response => {
        let p:Project = new Project();
        p.projectID = response.projectID;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        p.active = response.active;
        p.status = response.status;
        p.clientLocationID = response.clientLocationID;
        p.clientLocation = response.clientLocation;
  
        this.projects.push(p);
  
        //Clear New Project Grid
        this.newProject.projectID = null;
        this.newProject.projectName = null;
        this.newProject.dateOfStart = null;
        this.newProject.teamSize = null;
        p.active = null;
        p.status = null;
        p.clientLocationID = null;
        p.clientLocation = null;

        $("#newFormCancel").trigger("click");
      } ), 

      (error => {
        console.log(error);
      }));
    }
  }

  onEdit(projectIndex) {
    this.editForm.reset();

    //added delay so that reset form has enough time to executes before update
    setTimeout(
      () => {
        console.log("Current Project", this.projects[projectIndex]);
      this.currentIndex = projectIndex;
      this.currentProject.projectID = this.projects[projectIndex].projectID;
      this.currentProject.projectName = this.projects[projectIndex].projectName;
      this.currentProject.dateOfStart = this.projects[projectIndex].dateOfStart;
      this.currentProject.teamSize = this.projects[projectIndex].teamSize;
      this.currentProject.active = this.projects[projectIndex].active;
      this.currentProject.status = this.projects[projectIndex].status;
      this.currentProject.clientLocationID = this.projects[projectIndex].clientLocationID;
      this.currentProject.clientLocation = this.projects[projectIndex].clientLocation;}, 200)
  }

  onUpdate() {
  if(this.editForm.valid) {
    this.projectsScv.updateProject(this.currentProject).subscribe(
    (response)=> {
      let p = new Project();
      p.projectID = response.projectID;
      p.projectName = response.projectName;
      p.dateOfStart = response.dateOfStart.split("/").reverse().join("-"); //yyyy-MM-dd
      p.teamSize = response.teamSize;
      p.active = response.active;
      p.status = response.status;
      p.clientLocationID = response.clientLocationID;
      p.clientLocation = response.clientLocation;
      this.projects[this.currentIndex] = p;

      // Clear update grid
      this.currentProject.projectID =  null;
      this.currentProject.projectName =  null;
      this.currentProject.dateOfStart =  null;
      this.currentProject.teamSize = null;
      p.active = null;
      p.status = null;
      p.clientLocationID = null;
      p.clientLocation = null;

      $("#editFormCancel").trigger("click")
    }, 
    
    (error)=> {
      console.log(error);
    });}
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



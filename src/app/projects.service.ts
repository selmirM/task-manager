import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    // let currentUser = { token: "" };
    // var headers = new HttpHeaders();
    // headers.set("Authorization", "Bearer");
    // console.log('storageUser',sessionStorage.currentUser);
    // console.log('storage',sessionStorage);

    // if (sessionStorage.currentUser != null) {
    //   currentUser = JSON.parse(sessionStorage.currentUser);
    //   headers = headers.set("Authorization", "Bearer " + currentUser.token);
    // }

    return this.httpClient.get<Project[]>("/api/projects")
  }

  insertProject(newProject: Project): Observable<Project> {
    // let currentUser = { token: "" };
    // var headers = new HttpHeaders();
    // headers.set("Authorization", "Bearer");

    // if (sessionStorage.currentUser != null) {
    //   currentUser = JSON.parse(sessionStorage.currentUser);
    //   headers = headers.set("Authorization", "Bearer " + currentUser.token);
    // }

    return this.httpClient.post<Project>("/api/projects", newProject);
  }

  updateProject(existingProject: Project): Observable<Project> {
    return this.httpClient.put<Project>("/api/projects", existingProject);
  }

  
  deleteProject(deleteProject: number): Observable<Project> {
    let httpParams = new HttpParams().set('projectID', deleteProject.toString());
    let options = { params: httpParams };

    return this.httpClient.delete<Project>("/api/projects", options);
  }

  searchProject(searchBy: string, searchText: string): Observable<Project[]> {
    var httpParams = new HttpParams()
    .set('searchby', searchBy)
    .set("searchtext", searchText);

    let options = {params: httpParams}

    return this.httpClient.get<Project[]>("api/projects/search", options)
  }
  
}

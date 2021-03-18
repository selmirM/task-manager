import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>("/api/projects")
  }

  insertProject(newProject: Project): Observable<Project> {
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
  
}

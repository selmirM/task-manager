import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  Designation: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];
  CurrentProject: string = 'Project A';

  ngOnInit() {
    this.Designation = 'Team Leader';
    this.Username = 'Scott Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.Clients = [
      'ABC Infotech Ltd.',
      'DEF Software Solutions',
      'GHI Industries'
    ];
    this.Projects = [
      'Project A', 'Project B', 'Project C', 'Project D'
    ];
    for (let i = 2019; i >= 2010; i--) {
      this.Years.push(i);
    }

    this.TeamMembersSummary = [
      { Region: "East", TeamMembersCount: 20, temporarilyUnvailableMembers: 4 },
      { Region: "South", TeamMembersCount: 15, temporarilyUnvailableMembers: 8 },
      { Region: "West", TeamMembersCount: 17, temporarilyUnvailableMembers: 1 },
      { Region: "North", TeamMembersCount: 15, temporarilyUnvailableMembers: 6 }
    ];

    this.TeamMembers = [
      {
        Region: "East", Members: [
          { ID: 1, Name: 'Ford', Status: 'Available' },
          { ID: 2, Name: 'Miller', Status: 'Available' },
          { ID: 3, Name: 'Jones', Status: 'Busy' },
          { ID: 4, Name: 'James', Status: 'Busy' },
        ]
      },
      {
        Region: "South", Members: [
          { ID: 1, Name: 'Ana', Status: 'Available' },
          { ID: 2, Name: 'Sebastian', Status: 'Busy' },
          { ID: 3, Name: 'John', Status: 'Busy' },
          { ID: 4, Name: 'Terry', Status: 'Busy' },
        ]
      },
      {
        Region: "West", Members: [
          { ID: 1, Name: 'Halland', Status: 'Available' },
          { ID: 2, Name: 'Muhammed', Status: 'Available' },
          { ID: 3, Name: 'Leo', Status: 'Available' },
          { ID: 4, Name: 'Jane', Status: 'Available' },
        ]
      },
      {
        Region: "North", Members: [
          { ID: 1, Name: 'Lisa', Status: 'Available' },
          { ID: 2, Name: 'Sarah', Status: 'Available' },
          { ID: 3, Name: 'Lucas', Status: 'Busy' },
          { ID: 4, Name: 'Maria', Status: 'Available' },
        ]
      },
    ]
  }

  onProjectChange($event) {
    this.CurrentProject = $event.target.innerHTML;
    if ($event.target.innerHTML == "Project A") {
      this.ProjectCost = 3113507;
      this.CurrentExpenditure = 26788;
      this.AvailableFunds = 322536;
    } else if ($event.target.innerHTML == "Project B") {
      this.ProjectCost = 311333;
      this.CurrentExpenditure = 26721;
      this.AvailableFunds = 3225334;
    } else if ($event.target.innerHTML == "Project C") {
      this.ProjectCost = 4211333;
      this.CurrentExpenditure = 216721;
      this.AvailableFunds = 31225334;
    } else if ($event.target.innerHTML == "Project D") {
    this.ProjectCost = 1211333;
    this.CurrentExpenditure = 116721;
    this.AvailableFunds = 11225;
  }
  }

}

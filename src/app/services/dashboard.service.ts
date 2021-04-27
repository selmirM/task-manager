import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMembersSummary(): any[] {
    return [
      { Region: "East", TeamMembersCount: 20, temporarilyUnvailableMembers: 4 },
      { Region: "South", TeamMembersCount: 15, temporarilyUnvailableMembers: 8 },
      { Region: "West", TeamMembersCount: 17, temporarilyUnvailableMembers: 1 },
      { Region: "North", TeamMembersCount: 15, temporarilyUnvailableMembers: 6 }
    ];
  }

}

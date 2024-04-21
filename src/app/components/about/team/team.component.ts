import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  constructor(private data:DataService) {}

  getTeamProfilesCollection() {
    return this.data.teamProfilesCollection
  }

}

import { Component} from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss'
})
export class RoadmapComponent {
  constructor(private data:DataService) {}

  getRoadMapCardsCollection() {
    return this.data.roadMapCardsCollection
  }
}

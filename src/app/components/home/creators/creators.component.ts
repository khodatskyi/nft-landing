import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrl: './creators.component.scss'
})
export class CreatorsComponent {
  constructor(private data:DataService) {}

  creatorsCollection() {
    return this.data.getCreatorsCollection()
  }

}

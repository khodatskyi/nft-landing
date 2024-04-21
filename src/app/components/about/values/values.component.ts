import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrl: './values.component.scss',
})
export class ValuesComponent {
  constructor(private data: DataService) {}

  getValuesCardsCollection() {
    return this.data.valuesCardCollection;
  }
}

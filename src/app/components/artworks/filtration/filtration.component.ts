import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CartItem } from '../../cart/cart-item.interface';

@Component({
  selector: 'app-filtration',
  templateUrl: './filtration.component.html',
  styleUrl: './filtration.component.scss',
})
export class FiltrationComponent implements OnInit {
  @Output() sortingMethodChanged = new EventEmitter<any>();

  constructor(private date: DataService) {}

  array: CartItem[] = [];
  
  changedArray: CartItem[] = [];

  ngOnInit(): void {
    this.array = this.date.artWorksCollection;
    this.changedArray = this.array
    console.log(this.array);
  }

  onSortOptionChange(event: any) {

    switch (event.value) {
      case 'priceLowToHigh':
        this.date.totalPages = Math.ceil(this.changedArray.length / this.date.step)
        this.sortingMethodChanged.emit(this.changedArray.sort((a, b) => a.price - b.price));
        break;
      case 'priceHighToLow':
        this.date.totalPages = Math.ceil(this.changedArray.length / this.date.step)
        this.sortingMethodChanged.emit(this.changedArray.sort((a, b) => b.price - a.price));
        break;
      case 'dateNewToOld':
        this.date.totalPages = Math.ceil(this.changedArray.length / this.date.step)
        this.sortingMethodChanged.emit(this.changedArray.filter((obj) => obj.status === 'new').concat(this.changedArray.filter((obj) => obj.status === 'old')));
        break;
      case 'dateOldToNew':
        this.date.totalPages = Math.ceil(this.changedArray.length / this.date.step)
        this.sortingMethodChanged.emit(this.changedArray.filter((obj) => obj.status === 'old').concat(this.changedArray.filter((obj) => obj.status === 'new')));
        break;
      case 'alphabeticalAscending':
        this.date.totalPages = Math.ceil(this.changedArray.length / this.date.step)
        this.sortingMethodChanged.emit(this.changedArray.sort((a, b) => a.title.localeCompare(b.title)));
        break;
      case 'alphabeticalDescending':
        this.date.totalPages = Math.ceil(this.changedArray.length / this.date.step)
        this.sortingMethodChanged.emit(this.changedArray.sort((a, b) => b.title.localeCompare(a.title)));
        break;
      default:
        break;
    }
  }

  onCategoryChange(event: any) {
    this.sortingMethodChanged.emit(event.value)

    switch (event.value) { 
      case 'all':
        console.log(event.value);
        console.log(this.array);
        this.changedArray = this.array
        this.date.totalPages = Math.ceil(this.array.length / this.date.step)
        this.sortingMethodChanged.emit(this.array);
        break;
      case 'nature':
        console.log(event.value);
        this.changedArray = this.array.filter((obj) => obj.category === 'nature');
        console.log(this.array);
        this.date.totalPages = Math.ceil(this.changedArray.length / this.date.step)
        this.sortingMethodChanged.emit(this.changedArray);
        break;
      case 'cat':
        this.changedArray = this.array.filter((obj) => obj.category === 'cat');
        console.log(this.array);
        this.date.totalPages = Math.ceil(this.changedArray.length / this.date.step)
        this.sortingMethodChanged.emit(this.changedArray);
        break;
    }
  }
}

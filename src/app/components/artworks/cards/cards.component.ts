import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CartService } from '../../cart/service/cart.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent implements OnInit {
  displayedCards: {
    img: string;
    title: string;
    category: string;
    status: string;
    price: number;
  }[] = [];
  allCards: {
    img: string;
    title: string;
    category: string;
    status: string;
    price: number;
  }[] = this.data.artWorksCollection;

  currentPage: number = 1;
  pageSize: number = 15;

  constructor(public data: DataService, private cart: CartService) {}

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedCards = this.allCards.slice(startIndex, endIndex);
  }

  onPageChanged(pageChange: number): void {
    this.currentPage = pageChange;
    this.loadCards();
  }

  sortChanged(sortBy: any): void {
    this.data.pageCollection = [];
    for (let i = 1; i <= this.data.totalPages; i++) {
      this.data.pageCollection.push(i);
    }

    this.currentPage = 1;
    this.allCards = sortBy;
    this.loadCards();
  }

  addItemToCard(item: {
    img: string;
    title: string;
    category: string;
    status: string;
    price: number;
  }) {
    this.cart.addToCart(item);
  }
}

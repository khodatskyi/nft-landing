import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { CartService } from '../../cart/service/cart.service';
import { CartItem } from '../../cart/cart-item.interface';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrl: './trend.component.scss',
})
export class TrendComponent implements OnInit, OnDestroy {
  cards: any[] = [];
  currentIndex: number = 0;
  numCardsToShow: number = 5;
  private breakpointSubscription: Subscription;

  constructor(
    private data: DataService,
    private breakpointObserver: BreakpointObserver,
    private cart: CartService
  ) {
    this.breakpointSubscription = this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.numCardsToShow = 1;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.numCardsToShow = 2;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.numCardsToShow = 3;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.numCardsToShow = 4;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.numCardsToShow = 5;
        }
      });
  }

  ngOnInit(): void {
    this.cards = this.data.getTrendCollectionCards();
  }

  // получаем набор карточек для отображения их в шаблоне
  trendCollectionCards() {
    return this.data.getTrendCollectionCards();
  }

  // кнопки для слайдера
  showNext(): void {
    if (this.currentIndex < this.cards.length - 5) {
      this.currentIndex++;
    }
    console.log(this.currentIndex);
  }

  showPrevious(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    console.log(this.currentIndex);
  }

  addItemToCart(item: CartItem) {
    this.cart.addToCart(item);
  }

  ngOnDestroy(): void {
    this.breakpointSubscription.unsubscribe();
  }
}

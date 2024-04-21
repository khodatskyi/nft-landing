import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../cart/service/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit, OnDestroy {
  isSmallScreen: boolean = false;
  isOpen: boolean = false;
  cartColor: string = 'red';
  private quantityItemsInCartSubscription: Subscription;
  quantityItemsInCartNumber: number = 0;
  private totalSumOfItemsInCartSubscription: Subscription;
  totalSumOfItemsInCart: number = 0;

  constructor(private cartService: CartService) {
    this.onResize();
    this.quantityItemsInCartSubscription =
      this.cartService.quantityItemsInCart$.subscribe(
        (number) => (this.quantityItemsInCartNumber = number)
      );
    this.totalSumOfItemsInCartSubscription =
      this.cartService.totalSumOfItemsInCart$.subscribe(
        (number) => (this.totalSumOfItemsInCart = number)
      );
  }

  ngOnInit(): void {
    const storedQuantityItemsInCart = sessionStorage.getItem(
      'quantityItemsInCart'
    );
    if (storedQuantityItemsInCart) {
      this.quantityItemsInCartNumber = JSON.parse(storedQuantityItemsInCart);
      console.log(this.quantityItemsInCartNumber);
      this.cartService.quantityItemsInCartSubject.next(
        this.quantityItemsInCartNumber
      );
    }

    const storedTotalSumOfItemsInCart = sessionStorage.getItem(
      'totalSumOfItemsInCart'
    );
    if (storedTotalSumOfItemsInCart) {
      this.totalSumOfItemsInCart = JSON.parse(storedTotalSumOfItemsInCart);
      console.log(this.quantityItemsInCartNumber);
      this.cartService.totalSumOfItemsInCartSubject.next(
        this.totalSumOfItemsInCart
      );
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isSmallScreen = window.innerWidth <= 768;
    if (this.isSmallScreen) {
      this.isOpen = false;
    }
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  toggleCart() {
    this.cartService.toggleCart();
    this.cartColor = this.cartColor === 'red' ? 'greenyellow' : 'red';
  }

  quantityItemsInCart() {}

  ngOnDestroy(): void {
    this.quantityItemsInCartSubscription.unsubscribe();
    if (this.totalSumOfItemsInCartSubscription) {
      this.totalSumOfItemsInCartSubscription.unsubscribe();
    }
  }
}

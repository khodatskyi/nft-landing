import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from './service/cart.service';
import { CartItem } from './cart-item.interface';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnDestroy, OnInit {
  isCartOpen: boolean = false;
  private cartToggleSubscription: Subscription;
  private cartItemsSubscription: Subscription;
  cartItems: CartItem[] = [];
  private quantityItemsInCartNumberSubscription: Subscription;
  quantityItemsInCartNumber: number = 0;

  constructor(private cartService: CartService, private sb: SnackBarService) {
    this.cartToggleSubscription = this.cartService.isCartOpen$.subscribe(
      (isOpen) => (this.isCartOpen = isOpen)
    );

    this.cartItemsSubscription = this.cartService.cartItems$.subscribe(
      (items) => {
        this.cartItems = items;
      }
    );

    this.quantityItemsInCartNumberSubscription =
      this.cartService.quantityItemsInCart$.subscribe(
        (num) => (this.quantityItemsInCartNumber = num)
      );
  }

  ngOnInit(): void {
    const storedCartItems = sessionStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
      console.log(this.cartItems);
      this.cartService.cartItemsSubject.next(this.cartItems);
    }
  }

  deleteFromCart(item: CartItem) {
    this.cartService.deleteFromCart(item);
  }

  clickOnBuyButton() {
    this.sb.openSnackBar(
      'Payment is currently unavailable. We apologize for any inconvenience.',
      'OK'
    );
  }

  ngOnDestroy(): void {
    if (this.cartToggleSubscription) {
      this.cartToggleSubscription.unsubscribe();
    }
    if (this.cartItemsSubscription) {
      this.cartItemsSubscription.unsubscribe();
    }
    if (this.quantityItemsInCartNumberSubscription) {
      this.quantityItemsInCartNumberSubscription.unsubscribe();
    }
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../cart-item.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // обзеребл для открывания \ закрывания корзины
  private isCartOpenSubject = new BehaviorSubject<boolean>(false);
  isCartOpen$ = this.isCartOpenSubject.asObservable();
  // обзеребл для работы с корзиной
  dataCart: {}[] = [];
  public cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();
  // обзеребл для вывода кол-ва товара в корзине
  public quantityItemsInCartSubject = new BehaviorSubject<number>(0);
  quantityItemsInCart$ = this.quantityItemsInCartSubject.asObservable();
  // обзеребл для тотал суммы
  public totalSumOfItemsInCartSubject = new BehaviorSubject<number>(0);
  totalSumOfItemsInCart$ = this.totalSumOfItemsInCartSubject.asObservable();
  totalSumOfItemsInCart: number = 0;

  audio: HTMLAudioElement = new Audio('../../../assets/magic2.mp3');

  constructor() {}

  toggleCart() {
    // закрыта корзина или открыта
    this.isCartOpenSubject.next(!this.isCartOpenSubject.value);
  }

  addToCart(item: CartItem) {
    const currentItems = this.cartItemsSubject.value;
    const isItemInCart = currentItems.some(
      (existingItem) => existingItem.title === item.title
    );
    if (!isItemInCart) {
      this.audio.play();
      const updatedItems = [...currentItems, item];
      this.cartItemsSubject.next(updatedItems);
      this.quantityItemsInCartSubject.next(this.cartItemsSubject.value.length);

      ///////////////////////////////////////////////////////////////
      // логика вывода тотал суммы
      let totalPriceFromStorage: number = parseFloat(
        sessionStorage.getItem('totalSumOfItemsInCart') || '0'
      );

      totalPriceFromStorage += item.price;
      totalPriceFromStorage = parseFloat(totalPriceFromStorage.toFixed(2));
      this.totalSumOfItemsInCartSubject.next(totalPriceFromStorage);

      sessionStorage.setItem(
        'totalSumOfItemsInCart',
        JSON.stringify(totalPriceFromStorage)
      );

      ///////////////////////////////////////////////////////////////

      sessionStorage.setItem(
        'quantityItemsInCart',
        JSON.stringify(this.cartItemsSubject.value.length)
      );
      sessionStorage.setItem('cartItems', JSON.stringify(updatedItems));
    } else {
      console.log('Мы не можем добавить этот товар, он уже есть в корзине');
    }
  }

  deleteFromCart(itemToRemove: CartItem) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.filter((item) => item !== itemToRemove);
    this.cartItemsSubject.next(updatedItems);
    console.log(this.cartItemsSubject.value.length);
    this.quantityItemsInCartSubject.next(this.cartItemsSubject.value.length);

    ///////////////////////////////////////////////////////////////
    // логика вывода тотал суммы
    let totalPrice: number = parseFloat(
      sessionStorage.getItem('totalSumOfItemsInCart') || '0'
    );

    totalPrice -= itemToRemove.price;
    totalPrice = parseFloat(totalPrice.toFixed(2));
    this.totalSumOfItemsInCartSubject.next(totalPrice);

    sessionStorage.setItem('totalSumOfItemsInCart', JSON.stringify(totalPrice));
    ///////////////////////////////////////////////////////////////

    sessionStorage.setItem(
      'quantityItemsInCart',
      JSON.stringify(this.cartItemsSubject.value.length)
    );
    sessionStorage.setItem('cartItems', JSON.stringify(updatedItems));
  }
}

import { Component } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { CartService } from '../../cart/service/cart.service';
import { CartItem } from '../../cart/cart-item.interface';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  constructor(private data: DataService, private cart: CartService) {}

  featuresCollection() {
    return this.data.getFeaturedCollection();
  }

  addItemToCart(item: CartItem) {
    this.cart.addToCart(item);
  }
}

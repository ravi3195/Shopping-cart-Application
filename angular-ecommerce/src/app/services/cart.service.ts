import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService 
{
  cartItems: CartItem[]=[];

  // Subject is subclass of Observeable object
  totalPrice: Subject<number>= new Subject<number>();
  totalQuantity: Subject<number>= new Subject<number>();

  addToCart(theCartItem: CartItem)
  {
    // check if we already have item in the cart 
    let alreadyExistInCart: boolean= false;
    let existingCartItem: CartItem= undefined;

    if (this.cartItems.length>0)
    {
      // find the item in the cart accor`ding to item id
      for(let tempCartItem of this.cartItems)
      {
        if(tempCartItem.id== theCartItem.id)
        {
          existingCartItem= theCartItem;
          break;
        }
      }

       //check if we already found it
       alreadyExistInCart = (existingCartItem!=undefined);
    }

    if(alreadyExistInCart)
    {
      // increase the quantity
      existingCartItem.quantity++;
    }
    else
    {
      this.cartItems.push(theCartItem);
    }
  }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemList = new BehaviorSubject([])
  cartItemListArray:any =[]


  constructor() { }
//get cart item to cart component
getProducts(){
  return this.cartItemList.asObservable()
}

  addToCart(product:any){
    this.cartItemListArray.push(product)
    this.cartItemList.next(this.cartItemListArray)
  }

  getTotalPrice(){
    let grantTotal = 0
    this.cartItemListArray.map((item:any)=>{
      grantTotal += item.getTotalPrice
      console.log(grantTotal);
      
    })
    return grantTotal
  }
}

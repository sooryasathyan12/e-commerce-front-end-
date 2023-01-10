import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

products:any=[]
totalPrice=0
  constructor( private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((data)=>{
this.products = data
console.log(this.products);


    })
   this.totalPrice = this.cartService.getTotalPrice()
  }
  removeItemCart(item:any){
    this.cartService.removeItemCart(item)
    this.totalPrice = this.cartService.getTotalPrice()

  }
  removeAllItemCart(){
    this.cartService.removeAllItemCart()
  }
  //checkout - apply 10 %discount
  checkout(){
    if(this.products.length>=3){
      //appy 10% discount on the tottal price
      let discount = (this.totalPrice *10)/100
      let discountprice = this.totalPrice-discount
      alert('your order is confirmed!! and total price after discount is:'+Math.floor(discountprice))
      this.removeAllItemCart()
      this.router.navigateByUrl("")
    }
    else{
      alert('your order is confirmed!! and total  is:'+Math.floor(this.totalPrice))
    this.removeAllItemCart()
      this.router.navigateByUrl("")

    }
  }
}

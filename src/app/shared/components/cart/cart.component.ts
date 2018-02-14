import { Component, OnInit } from '@angular/core';
import { AddproductService } from '../../services/addproduct.service';
 import { AppRoutes } from '../../routes/routes.routing';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  item: Product[];

  constructor(private addproductservice: AddproductService,public router: Router) { 
    this.item = [];
  }

  ngOnInit() {
    this.viewCart()
  }


  viewCart() {
      this.addproductservice.viewCart()
      .subscribe((prod: any)=> {
        console.log(prod);
        this.item = prod.product;      
});
        }

placeorder(){
  this.addproductservice.placeorder(this.item).subscribe()
}

}

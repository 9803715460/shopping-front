import { Component, OnInit } from '@angular/core';
import { ShowitmesService } from '../../services/showitmes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-showitem',
  templateUrl: './showitem.component.html',
  styleUrls: ['./showitem.component.css']
})
export class ShowitemComponent implements OnInit {
  item: any
  items:Product[]
  constructor(public router: ActivatedRoute, private showitmesService: ShowitmesService) { 
    this.items = [];
  }

  ngOnInit() {
    this.showitem(this.router.snapshot.params['product']);
  }

  getitem() {
    this.item = this.showitmesService.getitems()
    
  }

  showitem(item) {
    this.showitmesService.showitem(item)
      .subscribe((prod: any) => {
        this.items = prod.product;
      });
  }
  

}

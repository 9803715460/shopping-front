import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowitmesService } from '../../services/showitmes.service';
 import { AppRoutes } from '../../routes/routes.routing';
import { Product } from '../../interfaces/product.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
shoes="../../../../assets/images/s-l225.jpg"
perfumes="../../../../assets/images/perfumes.png"
formalpaints="../../../../assets/images/formalpaint.jpg"
shirts="../../../../assets/images/formal-shirts-250x250.jpg"
jeans="../../../../assets/images/Jeans_for_men.jpg"

reebok="../../../../assets/images/brands/Reebok_feeldesain_00.jpg"
addidas="../../../../assets/images/brands/adidas_logo_sport_4089_1920x1080.jpg"
puma="../../../../assets/images/brands/Puma-Sports-Brand-Logo-Full-HD-Wallpapers.jpg"
nike="../../../../assets/images/brands/nike_logo_sports_lettering_minimalism_42689_1920x1080.jpg"
levis="../../../../assets/images/brands/levis.jpg"
parkavenue="../../../../assets/images/brands/park.jpg"
peterengland="../../../../assets/images/brands/peter england.jpg"

  constructor(public router: Router, private showitmesService:ShowitmesService) { }

  ngOnInit() {
  }
  shoess(){
    let value="shoes"
    this.showitmesService.setitem(value)
    
    }
  
  perfumess(){
    let value="perfumes"
    this.showitmesService.setitem(value)
   }
  
   formalpaintss(){
    let value="formal paints"
    this.showitmesService.setitem(value)
   }
   shirtss(){
    let value="shirts"
    this.showitmesService.setitem(value)
   }
   jeanss(){
    let value="jeans"
    this.showitmesService.setitem(value)
   }
   reeboks(){
    let value="reebok"
    this.showitmesService.setitem(value)
   }
   addidass(){
    let value="addidas"
    this.showitmesService.setitem(value)
   }
   pumas(){
    let value="puma"
    this.showitmesService.setitem(value)
   }
   peterenglands(){
    let value="nike"
    this.showitmesService.setitem(value)
   }
   nikes(){
    let value="nike"
    this.showitmesService.setitem(value)
   }
   parkavenues(){
    let value="park avenue"
    this.showitmesService.setitem(value)
   }
   leviss(){
    let value="levi's"
    this.showitmesService.setitem(value)
   }



}

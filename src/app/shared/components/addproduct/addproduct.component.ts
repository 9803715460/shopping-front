import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { AddproductService } from '../../services/addproduct.service';
// import { AppRoutes } from '../../routes/routes.routing';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product.interface';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  userForm: FormGroup;
  formSubmitted = false;
  item: Product[];
  constructor(private addproductservice: AddproductService,public router: Router) {
    this.item = [];
  }

  ngOnInit(
    
  ) {
    this.getUsers()
    this.userForm = new FormGroup({
      category: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      brand: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      unitPrice: new FormControl('', [Validators.required, Validators.maxLength(10)]),
     
    });
    }
    onFormSubmit(): void {
      this.addproductservice.addproduct(this.userForm.value).subscribe();
     this.formSubmitted = true;
      this.formSubmitted = true;
   }
   getUsers() {
    
    
      this.addproductservice.viewproduct()
      .subscribe((prod: any)=> {
        console.log(prod);
        this.item = prod.product;
       
      });
    }
  
   
    resetForm() { 
      this.userForm.reset();
    }
  }




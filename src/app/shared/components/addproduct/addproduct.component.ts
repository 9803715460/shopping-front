import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { AddproductService } from '../../services/addproduct.service';
 import { AppRoutes } from '../../routes/routes.routing';
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
  category = [
    {name: 'Shoes'},
    {name: 'Shirts'},
    {name: 'jeans' },
    {name: 'formal paints' },
    {name: 'perfumes', }

];
brand = [
  {name: 'reebok'},
  {name: 'addidas'},
  {name: 'puma' },
  {name: 'nike' },
  {name: "levi's"},
  {name: 'park avenue'},
  {name: 'peter england'}

] 
  constructor(private addproductservice: AddproductService,public router: Router) {
    this.item = [];
  }

  ngOnInit(
    
  ) {
    this.getUsers()
    this.userForm = new FormGroup({
      category: new FormControl(this.category[0].name),
      brand: new FormControl(this.brand[0].name),
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      unitPrice: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      productImage: new FormControl('', [Validators.required]),
      
     
    });
    }
    onFormSubmit(): void {
      console.log('this.userForm.value', this.userForm.value);
      this.addproductservice.addproduct(this.userForm.value).subscribe(
        (success) => {
          console.log(success);
          this.addproductservice.setItems(success);
        // this.router.navigate(["showusers"]);
         },
         (error) => {
           console.log(error);
           
         }
      );
     this.formSubmitted = true;
      this.formSubmitted = true;
   }
  //  onFileChange(event) {
  //   let reader = new FileReader();
  //   if(event.target.files && event.target.files.length > 0) {
  //     let file = event.target.files[0];
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.userForm.patchValue({
  //         productImage.filename: file.name,
  //         productImage.filetype: file.type,
  //         productImage.value: reader.result.split(',')[1]
  //       });
  //       console.log('aaaaa', this.userForm.value);
  //     };
  //   }
  // }

  clearFile() {
    this.userForm.get('productImage').setValue(null);
    this
    }

   getUsers() {
    
    this.item = this.addproductservice.getItems();
      this.addproductservice.viewproduct()
      .subscribe((prod: any)=> {
        console.log(prod);
        this.item = prod.product;
        this.addproductservice.setItems(prod.product);
        

      });
    }
  
    addtocart(item){
      this.addproductservice.addtocart(item).subscribe()
    }
   
    resetForm() { 
      this.userForm.reset();
    }
  }




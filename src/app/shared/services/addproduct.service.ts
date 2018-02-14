import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../interfaces/product.interface';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class AddproductService {
 private apiURL = "http://localhost:3001";
 item: Product[];
 items: Product[];

constructor(private http: HttpClient) {
    this.item = [];
    this.items =[];
 }

addproduct(value):  Observable<Product[]> {
    return this.http.post<Product[]>(this.apiURL + "/api/product/create", value);
}
viewproduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL + "/api/product/list");
}

viewCart():Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL + "/api/product/viewcart");
}


udpateProduct(prod){
    for(let i = 0; i < this.items.length; i++) {
        if(this.items[i].name === prod.name) {
          this.items[i] = prod;
        }
      }
}
getItems() {
    return this.items;
}
setItems(item) {
    this.items = item;
}
addtocart(item):Observable<Product[]>{
    console.log(item)
    return this.http.post<Product[]>(this.apiURL + "/api/product/addtocart", item);
     
}
placeorder(orderitem):Observable<Product[]>{
    console.log(orderitem)
    return this.http.post<Product[]>(this.apiURL + "/api/product/placeorder", orderitem);

}


}
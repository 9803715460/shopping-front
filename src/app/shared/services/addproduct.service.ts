import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../interfaces/product.interface';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class AddproductService {
 private apiURL = "http://localhost:3001";
 item: Product[];

constructor(private http: HttpClient) {
    this.item = [];
 }

addproduct(value): any {
       
    return this.http.post(this.apiURL + "/api/product/create", value);
}
viewproduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL + "/api/product/list");
    
    
}

}
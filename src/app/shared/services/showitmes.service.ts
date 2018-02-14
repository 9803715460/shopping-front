import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../interfaces/product.interface';
import { environment } from '../../../environments/environment.prod';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class ShowitmesService {
    private apiURL = "http://localhost:3001";

    constructor(private http: HttpClient, public router: Router) { }
    item: any;

    showitem(item): Observable<Product[]> {
        let parameters = {
            keyword: item,
        };
        return this.http.post<Product[]>(this.apiURL + "/api/product/showitem", parameters);
    }
    showbrand(item): Observable<Product[]> {
        let parameters = {
            keyword: item,
        };
        return this.http.post<Product[]>(this.apiURL + "/api/product/showbrand", parameters);
    }

    setitem(value) {
        this.item = value
        this.router.navigate(['showitems'])

    }

    getitems() {
        return this.item;
    }


}
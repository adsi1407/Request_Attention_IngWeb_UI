import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {
  constructor (private http: Http) {
  }

  getCustomers(): Observable<any> {
    return this.http.get('http://localhost:8080/rest/Customer').
    map(Response => {
      return Response.text();
    });
  }
}

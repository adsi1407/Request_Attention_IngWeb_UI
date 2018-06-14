import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestTypeService {
  constructor (private http: Http) {
  }

  getRequestTypes(): Observable<any> {
    return this.http.get('http://localhost:8080/rest/RequestType').
    map(Response => {
      return Response.text();
    });
  }
}

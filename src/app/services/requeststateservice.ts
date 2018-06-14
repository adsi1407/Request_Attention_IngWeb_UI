import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestStateService {
  constructor (private http: Http) {
  }

  getRequestStates(): Observable<any> {
    return this.http.get('http://localhost:8080/rest/RequestState').
    map(Response => {
      return Response.text();
    });
  }
}

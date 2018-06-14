import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AttendantService {
  constructor (private http: Http) {
  }

  getAttendants(): Observable<any> {
    return this.http.get('http://localhost:8080/rest/Attendant').
    map(Response => {
      return Response.text();
    });
  }
}

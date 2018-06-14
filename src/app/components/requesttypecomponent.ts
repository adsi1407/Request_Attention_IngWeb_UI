import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestTypeService } from '../services/requesttypeservice';

@Component({
  templateUrl: '../views/requesttype.html',
  providers: [RequestTypeService]
})

export class RequestTypeComponent {
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customerservice';

@Component({
  templateUrl: '../views/customer.html',
  providers: [CustomerService]
})

export class CustomerComponent {
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestStateService } from '../services/requeststateservice';

@Component({
  templateUrl: '../views/requeststate.html',
  providers: [RequestStateService]
})

export class RequeststateComponent {
}

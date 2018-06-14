import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendantService } from '../services/attendantservice';

@Component({
  templateUrl: '../views/attendant.html',
  providers: [AttendantService]
})

export class AttendantComponent {
}


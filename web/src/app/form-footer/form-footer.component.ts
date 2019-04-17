import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-form-footer',
  templateUrl: './form-footer.component.html',
  styleUrls: ['./form-footer.component.css']
})
export class FormFooterComponent implements OnInit {

  constructor(public auth: AuthenticationService) {}

  ngOnInit() {
  }

}

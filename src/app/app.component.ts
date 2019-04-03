import { Component , OnInit } from '@angular/core';
import { APIService } from './api.service';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 

  constructor(public auth: AuthenticationService) {}

ngOnInit() {
    
}

}

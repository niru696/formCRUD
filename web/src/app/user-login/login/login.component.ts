import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from 'src/app/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      console.log("sign in successfuly");
      this.router.navigateByUrl('/details');
    }, (err) => {
      console.error(err);
    }); 
  }
ngOnInit(){

}
}

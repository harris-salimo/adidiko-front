import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLoginSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    const reqObject = {
      email: email,
      password: password
    };

    this.service.login(reqObject).subscribe(response => {
      if(response.success) {
        this.service.setLocalStorage(response);
        console.log(this.service.getExpiration());
        console.log(this.service.isLoggedIn());
        this.router.navigate(['dashboard']);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegisterSubmit(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const role = form.value.role;
    const password = form.value.password;

    const reqObject = {
      name: name,
      email: email,
      role: role,
      password: password
    };

    this.service.register(reqObject).subscribe(response => {
      //this.service.setLocalStorage(response);
      //console.log(response);
      if(response.success) this.router.navigate(['login']);
    });
  }
}

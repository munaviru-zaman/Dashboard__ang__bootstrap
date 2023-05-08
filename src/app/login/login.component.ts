import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.form.group({
    userId: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  constructor(private form: FormBuilder, private router: Router) {}

  ngOnInit(): void {}
  login(data: any) {
    console.log(data);

    if (data.userId == 'admin001') {
      if (data.password == '12345') {
        this.router.navigate(['dashboard']);
      }
    }
  }
}

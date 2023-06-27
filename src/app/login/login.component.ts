import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['john@mail.com', [Validators.required, Validators.email]],
    password: ['changeme', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('login error');
      return;
    }
    this.authService
      .login(
        this.loginForm.get('email')?.value as string,
        this.loginForm.get('password')?.value as string
      )
      .subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
  }
}

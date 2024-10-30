import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const val = this.form.value;

    console.log(val);

    if (val.email && val.password) {
      console.log(val);

      this.authService.login(val).subscribe((response: any) => {
        if (response.token) {
            localStorage.setItem('token', response.token);
            console.log(response.message);  
            this.router.navigate(['/users']);
        }
    });
    }
  }
}

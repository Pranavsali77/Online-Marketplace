import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  userData = {
    name: '',
    email: '',
    password: '',
    role: 'USER',
  };

  constructor(private authService: AuthService) {}

  onSignup() {
    this.authService.signup(this.userData).subscribe({
      next: (res) => {
        console.log('Signup Success', res);
        alert('Signup successful!');
      },
      error: (err) => {
        console.error('Signup Error', err);
        alert('Signup failed! ' + err.error);
      },
    });
  }
}

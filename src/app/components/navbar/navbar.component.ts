import { Component } from '@angular/core';
import { Router } from '@angular/router'; // ✅ Import Router

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {} // ✅ Inject Router

  logout(): void {
    localStorage.clear(); // ✅ Clear storage
    this.router.navigate(['/home']); // ✅ Navigate to login
  }
}

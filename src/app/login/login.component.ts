import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyAppServicesService } from '../my-app-services.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule
  ],
  providers:[MyAppServicesService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private myAppServicesService: MyAppServicesService,
              private router: Router) { }

  onSubmit() {
    this.myAppServicesService.login(this.username, this.password).subscribe({
      next: (data) => {
        if (data.success) {
          console.log('Login successful:', data.admin);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = data.message || 'Login failed';
        }
      },
      error: (error) => {
        console.error('Login error:', error);
        this.errorMessage = error.message || 'An error occurred during login';
      }
    });
  }
}

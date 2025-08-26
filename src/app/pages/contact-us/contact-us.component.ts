import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private http: HttpClient) {}

  submitMessage() {
    this.http
      .post('http://localhost:8080/api/contact', this.contact)
      .subscribe({
        next: () => {
          alert('✅ Message sent successfully!');
          this.contact = { name: '', email: '', message: '' }; // reset
        },
        error: () => {
          alert('❌ Failed to send message. Please try again later.');
        },
      });
  }
}

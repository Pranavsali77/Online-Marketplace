import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFeedbackService } from 'src/app/services/user-feedback.service'; // ✅ use correct service
import { Feedback } from 'src/app/models/feedback.model';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css'],
})
export class UserFeedbackComponent implements OnInit {
  successMessage: string = '';
  itemId: number = 0;

  feedback: Feedback = {
    customerName: '',
    email: '',
    message: '',
  };

  constructor(
    private route: ActivatedRoute,
    private feedbackService: UserFeedbackService, // ✅ use correct service
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.successMessage = params['success'] || '';
      this.itemId = +params['itemId'] || 0;

      // Optional: Autofill from localStorage
      const storedName = localStorage.getItem('username');
      if (storedName) {
        this.feedback.customerName = storedName;
        this.feedback.email = storedName + '@example.com'; // Update if you store real email
      }
    });
  }

  onSubmit() {
    this.feedbackService.submitFeedback(this.feedback).subscribe((res) => {
      alert('Thank you for your feedback!');
      this.router.navigate(['/user/items']);
    });
  }

  skipFeedback() {
    this.router.navigate(['/user/items']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from 'src/app/models/feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  feedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks(): void {
    this.feedbackService.getAll().subscribe({
      next: (data) => (this.feedbacks = data),
      error: (err) => console.error('❌ Failed to load feedbacks', err),
    });
  }

  deleteFeedback(id: number): void {
    if (confirm('Are you sure to delete this feedback?')) {
      this.feedbackService.delete(id).subscribe({
        next: () => {
          this.feedbacks = this.feedbacks.filter((f) => f.id !== id);
        },
        error: (err) => console.error('❌ Delete failed', err),
      });
    }
  }
}

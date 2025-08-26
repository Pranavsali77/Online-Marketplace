import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewItem } from 'src/app/models/new-item.model';
import { Announcement } from 'src/app/models/announcement.model';
import { UserItemService } from 'src/app/services/user-item.service';
import { UserAnnouncementService } from 'src/app/services/user-announcement.service';

@Component({
  selector: 'app-view-all-items',
  templateUrl: './view-all-items.component.html',
  styleUrls: ['./view-all-items.component.css'],
})
export class ViewAllItemsComponent implements OnInit {
  items: NewItem[] = [];
  announcements: Announcement[] = [];

  constructor(
    private service: UserItemService,
    private announcementService: UserAnnouncementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.getAllItems().subscribe((data) => {
      this.items = data;
      console.log('Items with image URLs:', this.items); // 🔍 Check this in browser console
    });

    // ✅ Fetch announcements
    this.announcementService.getAll().subscribe({
      next: (data) => (this.announcements = data),
      error: (err) => console.error('Error loading announcements', err),
    });
  }

  // ✅ Navigate to item detail page
  viewDetails(id: number) {
    this.router.navigate(['/user/items/details', id]);
  }

  // ✅ Generate full image URL
  getImageUrl(filename: string): string {
    return 'http://localhost:8080/api/user/items/images/' + filename;
  }
}

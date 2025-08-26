import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { Announcement } from 'src/app/models/announcement.model';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css'],
})
export class AnnouncementComponent implements OnInit {
  announcements: Announcement[] = [];
  newAnnouncement: Announcement = {
    title: '',
    message: '',
    date: '',
  };

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.loadAnnouncements();
  }

  loadAnnouncements(): void {
    this.announcementService.getAll().subscribe((data) => {
      this.announcements = data;
    });
  }

  submit(): void {
    this.newAnnouncement.date = new Date().toISOString();
    this.announcementService.create(this.newAnnouncement).subscribe(() => {
      this.newAnnouncement = { title: '', message: '', date: '' };
      this.loadAnnouncements();
    });
  }

  delete(id: number): void {
    this.announcementService.delete(id).subscribe(() => {
      this.loadAnnouncements();
    });
  }
}

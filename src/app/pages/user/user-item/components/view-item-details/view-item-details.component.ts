import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserItemService } from 'src/app/services/user-item.service';
import { NewItem } from 'src/app/models/new-item.model';

@Component({
  selector: 'app-view-item-details',
  templateUrl: './view-item-details.component.html',
  styleUrls: ['./view-item-details.component.css'],
})
export class ViewItemDetailsComponent implements OnInit {
  item!: NewItem;

  constructor(
    private route: ActivatedRoute,
    private service: UserItemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    if (!username) {
      alert('Please log in first!');
      this.router.navigate(['/login']);
      return;
    }

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getItemById(id).subscribe((data) => {
      this.item = data;
      console.log('Fetched item:', data); // ✅ Check imageUrl here
    });
  }

  buyItem(id: number) {
    const buyerName = localStorage.getItem('username') || 'Guest';
    this.service.payItem(id, buyerName).subscribe((res) => {
      alert(res);
      this.router.navigate(['/payment'], { queryParams: { itemId: id } });
    });
  }
}

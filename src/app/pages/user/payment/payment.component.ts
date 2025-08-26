import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // ✅ Added Router
import { UserItemService } from 'src/app/services/user-item.service';
import { NewItem } from 'src/app/models/new-item.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  item!: NewItem;
  itemId!: number;

  constructor(
    private route: ActivatedRoute,
    private service: UserItemService,
    private router: Router // ✅ Injected Router
  ) {}

  ngOnInit(): void {
    this.itemId = Number(this.route.snapshot.queryParamMap.get('itemId'));
    this.service
      .getItemById(this.itemId)
      .subscribe((data) => (this.item = data));
  }

  makePayment() {
    alert(`Payment successful for ₹${this.item.price}`);

    const buyerName = localStorage.getItem('username') || 'Guest';

    this.service.payItem(this.itemId, buyerName).subscribe((res) => {
      // ✅ Navigate to feedback page with success message
      this.router.navigate(['/user/user-feedback'], {
        queryParams: {
          success: res,
          itemId: this.itemId,
        },
      });
    });
  }

  skipPayment() {
    this.router.navigate(['/user/items']);
  }
}

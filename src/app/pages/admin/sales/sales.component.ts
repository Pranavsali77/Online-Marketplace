import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';
import { Sale } from 'src/app/models/sale.model';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  sales: Sale[] = [];

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.getSales();
  }

  getSales(): void {
    this.salesService.getAllSales().subscribe({
      next: (data) => {
        this.sales = data;
      },
      error: (err) => {
        console.error('❌ Error fetching sales:', err);
      },
    });
  }
}

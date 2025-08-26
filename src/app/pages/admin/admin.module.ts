import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SalesComponent } from './sales/sales.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [AddProductComponent, AdminHomeComponent, SalesComponent, AnnouncementComponent, FeedbackComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, AdminRoutingModule],
})
export class AdminModule {}

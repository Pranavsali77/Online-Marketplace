import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { PaymentComponent } from './pages/user/payment/payment.component';
import { UserFeedbackComponent } from './pages/user/user-feedback/user-feedback.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },

  {
    path: 'user/items',
    loadChildren: () =>
      import('./pages/user/user-item/user-item.module').then(
        (m) => m.UserItemModule
      ),
  },
  // ✅ Lazy load AdminModule
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'payment', component: PaymentComponent },
  { path: 'user/user-feedback', component: UserFeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

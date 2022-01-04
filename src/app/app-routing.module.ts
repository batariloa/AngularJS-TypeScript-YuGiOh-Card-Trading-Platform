import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { KartaPreviewComponent } from './components/karta-preview/karta-preview.component';
import { LoginComponent } from './components/login/login.component';
import { MyProductsComponent } from './components/my-products/my-products.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { RegisterComponent } from './components/register/register.component';
import { UspesnoPlacanjeComponent } from './components/uspesno-placanje/uspesno-placanje.component';
import { FeedComponent } from './feed/feed.component';
import { LoginGuardService } from './services/login-guard.service';

const routes: Routes = [
  { path: 'feed', component: FeedComponent, canActivate: [LoginGuardService] },
  { path: 'transactions', component: FeedComponent, canActivate: [LoginGuardService] },
  { path: '', component: FeedComponent , canActivate: [LoginGuardService]},

  { path: 'myproducts', component: MyProductsComponent, canActivate: [LoginGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'success', component: UspesnoPlacanjeComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [LoginGuardService] },
  { path: 'cart', component: CartComponent, canActivate: [LoginGuardService]},
  { path: 'productPreview', component: ProductPreviewComponent},
  { path: 'cartPreview', component: CartPreviewComponent },
  { path: 'karta', component: KartaPreviewComponent },
  { path: 'karta/:id', component: KartaPreviewComponent },

 
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

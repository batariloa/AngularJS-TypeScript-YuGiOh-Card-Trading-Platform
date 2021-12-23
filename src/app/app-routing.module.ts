import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { KartaPreviewComponent } from './components/karta-preview/karta-preview.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { UspesnoPlacanjeComponent } from './components/uspesno-placanje/uspesno-placanje.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'success', component: UspesnoPlacanjeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'cart', component: CartComponent },
  { path: 'productPreview', component: ProductPreviewComponent },
  { path: 'cartPreview', component: CartPreviewComponent },
  { path: 'karta', component: KartaPreviewComponent },
  { path: 'karta/:id', component: KartaPreviewComponent },

 
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

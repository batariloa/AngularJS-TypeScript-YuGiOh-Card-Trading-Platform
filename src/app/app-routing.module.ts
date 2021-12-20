import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { CartComponent } from './components/cart/cart.component';
import { KartaPreviewComponent } from './components/karta-preview/karta-preview.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';

const routes: Routes = [
  
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

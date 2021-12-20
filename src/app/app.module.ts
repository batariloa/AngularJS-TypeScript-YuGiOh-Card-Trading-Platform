import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { reducer } from './redux/cart.reducer';
import { KartaPreviewComponent } from './components/karta-preview/karta-preview.component';
import { FeedComponent } from './feed/feed.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { SessionServiceService } from './services/session-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    KartaPreviewComponent,
    FeedComponent,
    NavbarComponent,
    CartPreviewComponent,
    ProductPreviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    CommonModule, HttpClientModule, RouterModule, StoreModule.forRoot({cart: reducer})
  ],
  providers: [ApiService, SessionServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartPreviewComponent } from './components/cart-preview/cart-preview.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UspesnoPlacanjeComponent } from './components/uspesno-placanje/uspesno-placanje.component';
import { AngularFireModule} from '@angular/fire/compat';
import { LoginComponent } from './components/login/login.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './components/register/register.component';
import { AddOglasComponent } from './components/add-oglas/add-oglas.component';
import { MatSliderModule } from '@angular/material/slider';
import { AngularMaterialModule} from "../angular.material"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { SearchFilterPipe } from './filters/cardNameFilter.pipe';
import { MyProductsComponent } from './components/my-products/my-products.component';
import { SessionServiceService } from './services/session-service.service';
import { LoginGuardService } from './services/login-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    KartaPreviewComponent,
    FeedComponent,
    NavbarComponent,
    CartPreviewComponent,
    ProductPreviewComponent,
    CheckoutComponent,
    UspesnoPlacanjeComponent,
    LoginComponent,
    RegisterComponent,
    AddOglasComponent,  SearchFilterPipe, MyProductsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,
    CommonModule, HttpClientModule, RouterModule, StoreModule.forRoot({cart: reducer}), ReactiveFormsModule,FormsModule,  AngularMaterialModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyACA3acQ4BuPojzimIUOCHKfDnSxQW-1r4",
      authDomain: "yugioh-20b18.firebaseapp.com",
      projectId: "yugioh-20b18",
      storageBucket: "yugioh-20b18.appspot.com",
      messagingSenderId: "280036925399",
      appId: "1:280036925399:web:3889f03a72768af876b592",
      measurementId: "G-TFLN3404NY"
    }),
    BrowserAnimationsModule

  ],
  providers: [ApiService, SearchFilterPipe, LoginGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

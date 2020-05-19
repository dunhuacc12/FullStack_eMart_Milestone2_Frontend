import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupBuyerComponent } from './pages/signup-buyer/signup-buyer.component';
import { SearchItemsComponent } from './pages/search-items/search-items.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { MeComponent } from './pages/me/me.component';
import { ShoppingCardComponent } from './pages/shopping-card/shopping-card.component';
import { PurchaseHistoryComponent } from './pages/purchase-history/purchase-history.component';
import { SignupSellerComponent } from './pages/signup-seller/signup-seller.component';
import { MystoreComponent } from './pages/mystore/mystore.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { SellerReportComponent } from './pages/seller-report/seller-report.component';
import { MoneyPipe } from './pipe/money.pipe';
import { DiscountPipe } from './pipe/discount.pipe';
// import { MoneyPipe } from './pipe/money.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupBuyerComponent,
    SearchItemsComponent,
    SearchResultsComponent,
    ProductDetailComponent,
    MeComponent,
    ShoppingCardComponent,
    PurchaseHistoryComponent,
    SignupSellerComponent,
    MystoreComponent,
    AddItemComponent,
    SellerReportComponent,
    MoneyPipe,
    DiscountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

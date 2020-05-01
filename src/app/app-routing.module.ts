import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupBuyerComponent } from './pages/signup-buyer/signup-buyer.component';
import { SignupSellerComponent } from './pages/signup-seller/signup-seller.component';
import { SearchItemsComponent } from './pages/search-items/search-items.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { MeComponent } from './pages/me/me.component';
import { ShoppingCardComponent } from './pages/shopping-card/shopping-card.component';
import { PurchaseHistoryComponent } from './pages/purchase-history/purchase-history.component';
import { MystoreComponent } from './pages/mystore/mystore.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { SellerReportComponent } from './pages/seller-report/seller-report.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup-buyer', component: SignupBuyerComponent },
  { path: 'signup-seller', component: SignupSellerComponent },
  { path: 'searchItems', component: SearchItemsComponent },
  { path: 'searchResult/:searchValue', component: SearchResultsComponent },
  { path: 'productDetail/:productId', component: ProductDetailComponent },
  { path: 'me', component: MeComponent },
  { path: 'shopping-card', component: ShoppingCardComponent },
  { path: 'purchase-history', component: PurchaseHistoryComponent },
  { path: 'mystore', component: MystoreComponent },
  { path: 'addItem', component: AddItemComponent },
  { path: 'seller-report', component: SellerReportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

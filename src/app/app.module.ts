import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoginComponent } from './auth/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormProductComponent } from './form-product/form-product.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { ShowShoppingComponent } from './show-shopping/show-shopping.component';
import { DetailsComponent } from './details/details.component';

const ROUTES: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShowShoppingComponent },
  { path: 'details/:productId', component: DetailsComponent },



]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListProductsComponent,
    ProductComponent,
    FormComponent,
    FormProductComponent,
    NotfoundComponent,
    AddProductComponent,
    HomeComponent,
    ShowShoppingComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    NgbModule,
    RouterModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

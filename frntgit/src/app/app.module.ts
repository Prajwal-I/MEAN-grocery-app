import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserAuthServiceService } from './services/user-auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    AdminDashComponent,
    UserDashComponent,
    UserLoginComponent,
    OrdersComponent,
    CartComponent,
    ProfileComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserAuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

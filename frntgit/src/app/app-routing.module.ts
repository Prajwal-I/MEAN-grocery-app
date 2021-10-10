import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { CartComponent } from './cart/cart.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {
    path:'login',
    component:UserLoginComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'adminDash',
    component:AdminDashComponent
  },
  {
    path:'userDash',
    component:UserDashComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'orders',
    component:OrdersComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'addProduct',
    component:AddProductComponent
  },
  {
    path:'editProduct',
    component:EditProductComponent
  },
  {
    path:'',
    component:UserDashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

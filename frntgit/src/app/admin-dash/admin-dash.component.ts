import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../services/data-transfer.service';
import { ProductsServiceService } from '../services/products-service.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.scss']
})
export class AdminDashComponent implements OnInit {

  constructor(private router:Router, private dataTransfer:DataTransferService, private productService:ProductsServiceService) { }
  data:any;
  ngOnInit(): void {
    this.user = this.dataTransfer.getData();
    //alert(this.user);
    if(this.user === undefined) this.router.navigate(['login']);
    this.productService.getAllProducts().subscribe(data => {
      console.log(typeof(data));
      this.products_all = data;
    })
  }
  pname:String;
  userinit:any;
  user;
  products_all:any;
  

  search(){
    if(this.pname == '') return;
    console.log(this.pname);
    var prod_name = {
      "product_name":this.pname
    }
    this.productService.getProductByName(prod_name).subscribe(data => {
      console.log("search ran");
      console.log(data);
      this.products_all = data;
    })
  }

  addProduct(){
    //alert(this.user);
    //if(this.user == undefined) this.user = this.userinit;
    // if(this.user == undefined) this.router.navigate(['login']);
    // this.dataTransfer.setData({'cart':this.cartItems, 'user':this.user});
    //this.userinit = this.user;
    this.dataTransfer.setData(this.user);
    this.router.navigate(['addProduct']);
  }

  // openOrders(){
  //   //if(this.user == undefined) this.user = this.userinit;
  //   this.dataTransfer.setData(this.user);
  //   console.log('from userdash user');
  //   console.log(this.user);
  //   //this.userinit = this.user;

  //   this.router.navigate(['orders']);
  // }

  // openProfile(){
  //   this.dataTransfer.setData(this.user);
  //   this.router.navigate(['profile']);
  // }

  logout(){
    this.user = undefined;
    this.router.navigate(['login']);
  }

  editProduct(product:any){
    // this.cartItems.push([product]);
    // console.log(this.cartItems);
    this.dataTransfer.setData({"product":product,"user":this.user});
    this.router.navigate(['editProduct']);
  }

}

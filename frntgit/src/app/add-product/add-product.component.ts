import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTransferService } from '../services/data-transfer.service';
import { ProductsServiceService } from '../services/products-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private datatransfer:DataTransferService, private formBuilder:FormBuilder, private productService:ProductsServiceService, private router:Router) { }
  user:any;
  ngOnInit(): void {
    this.user = this.datatransfer.getData();
  }

  signupForm = this.formBuilder.group({
    product_name: ['',  [Validators.required]],
    product_qty_available: ['',[Validators.required]],
    product_price: ['', [Validators.required]],
    product_category:[''],
    product_image:['']
  });

  signup(){
    console.log(this.signupForm.value);
    
    var productObj = {
      "product_name":this.signupForm.get('product_name').value,
      "product_qty_available":this.signupForm.get('product_qty_available').value,
      "product_price":this.signupForm.get('product_price').value,
      "product_category":this.signupForm.get('product_category').value,
      "product_image":this.signupForm.get('product_image').value,
      "product_qty_sold":10,
      "product_qty_available_status":true
    }
    this.productService.createProduct(productObj).subscribe(data =>{
      if(data) {
        alert("Product Created");
        //.router.navigate(['login']);
      } else {
        alert("error")
      }
    }, err=>{
      alert("product exists, try different name");
    })
  }

  back(){
    this.datatransfer.setData(this.user);
    this.router.navigate(['adminDash']);
  }

}

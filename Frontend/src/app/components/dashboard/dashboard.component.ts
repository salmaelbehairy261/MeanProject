import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { CateegoryService } from 'src/app/services/cateegory.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private productService:ProductService,private categorService:CateegoryService, public cookiesService: CookieService,private router: Router){
    if (!(this.cookiesService.get('token'))) {
      this.router.navigateByUrl('/home');
    }
  }

  productForm=new FormGroup({
  title:new FormControl('',[Validators.required]),
  price:new FormControl('',[Validators.required]),
  quantity:new FormControl('',[Validators.required]),
  size:new FormControl('',[]),
  color:new FormControl('',[]),
  description:new FormControl('',[Validators.required]),
  image:new FormControl('',[Validators.required]),
  category:new FormControl('',[Validators.required]),
  richDescription:new FormControl('',[Validators.required]),

});
get gettitle(){
  return this.productForm.controls["title"];
}
get getprice(){
  return this.productForm.controls["price"];
}
get getquantity(){
  return this.productForm.controls["quantity"];
}
get getsize(){
  return this.productForm.controls["size"];
}
get getcolor(){
  return this.productForm.controls["color"];
}
get getdescription(){
  return this.productForm.controls["richDescription"];
}
get getimage(){
  return this.productForm.controls["image"];
}
get getcategories(){
  return this.productForm.controls["category"];
}
get getsmallDescription(){
  return this.productForm.controls["description"];
}


categories:any;
ngOnInit(): void {this.categorService.getAllCategories().subscribe((response)=>{
  this.categories=response;})}

addproduct(e:any){
  e.preventDefault();
  if(this.productForm.status=="VALID")
  {
    //this.productForm.append('filedata',this.image);
    this.productService.addProduct(this.productForm.value,this.cookiesService.get('token')).subscribe((res)=>{
      this.router.navigate(['/dashboard']);
    })
  }
    console.log(this.productForm.value)
}

base64:any;
getImagePath(e:any){
  //script to get base64
  const file =e.target.files[0]
  const reader=new FileReader();
  reader.readAsDataURL(file);
  reader.onload=()=>{
    this.base64=reader.result
    //console.log(this.base64)
  }
}
// image:any;
// //choosen:boolean=false;
// fileChoosen(event:any)
// {
//   if(event.target.value){
//     this.image=<File>event.target.files[0];
//     //this.choosen=true;
//   }
// }
}




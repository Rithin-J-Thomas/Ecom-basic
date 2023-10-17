import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  addFormModel = this.fb.group({
    id: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    productName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9& ]+')]],
    categoryId: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    description: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z &.,]+')]],
    price: ['', [Validators.required, Validators.pattern('[0-9,. ]+')]],
    image: ['', [Validators.required, Validators.pattern('')]],
    rating: ['', [Validators.required, Validators.pattern('[0-9.]+')]],
    review: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z ]+')]],
    warrenty: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z ]+')]],
    is_availiable: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z ]+')]]
  })

  constructor(private fb: FormBuilder , private ds:DataService , private rout:Router) { }

  addNewProduct() {

    const path = this.addFormModel.value
    let productData = {
      id: path.id,
      productName: path.productName,
      categoryId: path.categoryId,
      description: path.description,
      price: path.price,
      image: path.image,
      rating: path.rating,
      review: path.review,
      warrenty: path.warrenty,
      is_availiable: path.is_availiable
    }

    if(this.addFormModel.valid){
      this.ds.addProduct(productData).subscribe({
      next:(result:any)=>{
        alert("New Product added")
        this.rout.navigateByUrl("")
      }
    })
    }else{
      alert("please fill all fields...")
    }
    
  }
}

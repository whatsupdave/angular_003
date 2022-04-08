import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:Product[] = [];

  constructor() { 
    let data = localStorage.getItem("products");
    if(data != null){
      this.products = JSON.parse(data);
    };
  };

  ngOnInit(): void {
  }

  private save(){
    localStorage.setItem('products', JSON.stringify(this.products));
  };

  //IKELIMAS I SARASA

  public addNewProduct(name:HTMLInputElement, count:HTMLInputElement){
    if(name.value != ''){
      this.products.push({
        name:name.value,
        count:count.valueAsNumber
      });
      name.value = '';
      count.value = '';
      this.save();
    }
  };

  public removeProduct(i:number){
    this.products.splice(i, 1);
    this.save();
  };

};

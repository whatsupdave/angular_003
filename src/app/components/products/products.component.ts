import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public vardai = ["Jonas", "Antanas", "Kestas"];

  constructor() { }

  ngOnInit(): void {
  }

  //IKELIMAS I SARASA

  public addNewVardas(vardas:HTMLInputElement){
    if(vardas.value != ''){
      console.log(vardas);
      this.vardai.push(vardas.value);
      vardas.value = '';
    }
  };

  public removeVardas(i:number){
    this.vardai.splice(i, 1);
  };

};

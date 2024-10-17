import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet,RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { combineLatest } from 'rxjs';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

interface Products{
  id:number;
  title:string;
  img:string;
  descrizione:string;
  fonte:string;
  type: "massa" | "recupero" | "salute" | "performance";

}

@Component({
  selector: 'app-p-prodotto',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,CardModule,ButtonModule],
  templateUrl: './p-prodotto.component.html',
  styleUrl: './p-prodotto.component.css'
})
export class PProdottoComponent implements OnInit {
  products: Products[]= [];
  product?: Products;
  id?: number;
  type?: "massa" | "recupero" | "salute" | "performance";

  constructor(private activatedRoute: ActivatedRoute, private http:HttpClient){}
  
  ngOnInit() {
    combineLatest([this.http.get<Products[]>("assets/data/products.json"),this.activatedRoute.queryParams])
    .subscribe(([products, queryParams]) => {
      this.products = products;
      this.id = queryParams['id'];
      this.type = queryParams['type'];
      this.filterProducts();
    });

  }
  filterProducts(){
    this.product = this.products.find(value => {
      return value.id == this.id;
    });
    console.log(this.product);
  }
}

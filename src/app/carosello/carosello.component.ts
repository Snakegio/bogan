import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { RouterOutlet,RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Products{
  id:number;
  title:string;
  img:string;
  descrizione:string;
  fonte:string;
  type: "massa" | "recupero" | "salute" | "performance";

}

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-carosello',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule,RouterOutlet,RouterLink],
  templateUrl: './carosello.component.html',
  styleUrl: './carosello.component.css'
})
export class CarouselCircularDemo implements OnInit{
  Titolo = ["Massa", "Salute", "Recupero", "Performance"];
  products: Products[]= [];
  isBold:boolean=false;
  responsiveOptions: any[] | undefined;
  visibleProductsCount = 9;
  displayedProducts: any[]= [];

  constructor(private activatedRoute: ActivatedRoute,private deviceService: DeviceDetectorService, private http:HttpClient){}

  isMobile(): boolean {
    return this.deviceService.isMobile();
  }
  ngOnInit() {
      this.http.get<Products[]>("assets/data/products.json")
      .subscribe(value=> {
        this.products = value;
        this.updateDisplayedProducts();
      }),
      this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1,
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 2,
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1,
        }
    ];
    }

    updateDisplayedProducts() {
      this.displayedProducts = this.products.slice(0, this.visibleProductsCount);
    }
  }

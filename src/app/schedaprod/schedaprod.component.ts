import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Component, OnInit } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';

interface Products {
  id: number;
  title: string;
  img: string;
  descrizione: string;
  type: 'massa' | 'recupero' | 'salute' | 'performance';
}
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-schedaprod',
  standalone: true,
  imports: [ButtonModule, TagModule, RouterOutlet, RouterLink, CardModule, CommonModule],
  templateUrl: './schedaprod.component.html',
  styleUrl: './schedaprod.component.css',
})
export class SchedaprodComponent implements OnInit {
  Titolo = ['Massa', 'Salute', 'Recupero', 'Performance'];
  products: Products[] = [];
  isBold: boolean = false;
  responsiveOptions: any[] | undefined;
  visibleProductsCount = 9;
  displayedProducts: any[] = [];
  id?: number;
  product?: Products;

  constructor(
    private activatedRoute: ActivatedRoute,
    private deviceService: DeviceDetectorService,
    private http: HttpClient
  ) {}

  isMobile(): boolean {
    return this.deviceService.isMobile();
  }

  ngOnInit() {
    combineLatest([
      this.http.get<Products[]>('assets/data/products.json'),
      this.activatedRoute.queryParams,
    ]).subscribe(([products, params]) => {
      this.id = params['id'];
      this.products = products;
      this.filterProducts();
    });
  }
  filterProducts() {
    this.product = this.products.find((product) => product.id == this.id);
  }

  updateDisplayedProducts() {
    this.displayedProducts = this.products.slice(0, this.visibleProductsCount);
  }
}

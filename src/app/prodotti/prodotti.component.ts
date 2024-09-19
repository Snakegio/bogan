import { Component } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodotti',
  standalone: true,
  imports: [DataViewModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './prodotti.component.html',
  styleUrl: './prodotti.component.css'
})
export class ProdottiComponent {
  products: DataViewModule[] | undefined;
  
  ngOnInit() {
    this.products = [
      {
        "id": 1,
        "title": "Proteine del Siero",
        "img": "https://example.com/images/proteine-siero.jpg",
        "descrizione": "Aumenta la sintesi proteica per lo sviluppo muscolare.",
        "type": "massa"
      },
      {
        "id": 2,
        "title": "BCAA",
        "img": "https://example.com/images/bcaa.jpg",
        "descrizione": "Favorisce il recupero muscolare post-allenamento.",
        "type": "recupero"
      },
      {
        "id": 3,
        "title": "Creatina Monoidrato",
        "img": "https://example.com/images/creatina.jpg",
        "descrizione": "Migliora la forza e la performance durante l'allenamento.",
        "type": "performance"
      },
      {
        "id": 4,
        "title": "Omega 3",
        "img": "https://example.com/images/omega3.jpg",
        "descrizione": "Supporta la salute cardiovascolare e riduce le infiammazioni.",
        "type": "salute"
      },
      {
        "id": 5,
        "title": "Glutammina",
        "img": "https://example.com/images/glutammina.jpg",
        "descrizione": "Aiuta il recupero muscolare e riduce l'affaticamento.",
        "type": "recupero"
      },
      {
        "id": 6,
        "title": "Gainer",
        "img": "https://example.com/images/gainer.jpg",
        "descrizione": "Aumenta l'apporto calorico per favorire la crescita muscolare.",
        "type": "massa"
      },
      {
        "id": 7,
        "title": "L-Carnitina",
        "img": "https://example.com/images/l-carnitina.jpg",
        "descrizione": "Favorisce l'utilizzo dei grassi come fonte di energia.",
        "type": "performance"
      },
      {
        "id": 8,
        "title": "Multivitaminico",
        "img": "https://example.com/images/multivitaminico.jpg",
        "descrizione": "Supporta il benessere generale e migliora le difese immunitarie.",
        "type": "salute"
      },
      {
        "id": 9,
        "title": "Caffeina Anidra",
        "img": "https://example.com/images/caffeina.jpg",
        "descrizione": "Aumenta la vigilanza e la resistenza durante gli allenamenti.",
        "type": "performance"
      },
      {
        "id": 10,
        "title": "ZMA",
        "img": "https://example.com/images/zma.jpg",
        "descrizione": "Supporta il recupero notturno e migliora la qualità del sonno.",
        "type": "recupero"
      },
      {
        "id": 11,
        "title": "Vitamina D3",
        "img": "https://example.com/images/vitamina-d3.jpg",
        "descrizione": "Aiuta a rafforzare le ossa e il sistema immunitario.",
        "type": "salute"
      },
      {
        "id": 12,
        "title": "Arginina",
        "img": "https://example.com/images/arginina.jpg",
        "descrizione": "Migliora la circolazione sanguigna e la vasodilatazione.",
        "type": "performance"
      }
    ]
  }
}

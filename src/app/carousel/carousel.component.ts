import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule,ButtonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {

  products?:Array<any>;

  responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];
ngOnInit(): void {
  this.products = [
    {
      "id": 1,
      "title": "Proteine del Siero",
      "img": "https://upload.wikimedia.org/wikipedia/commons/1/10/Basque_Hen_%28Euskal_Oiloa%29_chick_1.jpg",
      "descrizione": "Aumenta la sintesi proteica per lo sviluppo muscolare.",
      "type": "massa"
    },
    {
      "id": 2,
      "title": "BCAA",
      "img": "https://www.google.com/imgres?q=pulcino&imgurl=https%3A%2F%2Filfattoalimentare.it%2Fwp-content%2Fuploads%2F2020%2F02%2Fdebeccaggio-2.png&imgrefurl=https%3A%2F%2Filfattoalimentare.it%2Fpulcini-maschi-stop-strage-emendamento-camera.html&docid=zjx-tA9xWsDkOM&tbnid=Ul57uRcxNSsK_M&vet=12ahUKEwjuluPp1IaJAxUFiv0HHcKJHyIQM3oECG8QAA..i&w=487&h=283&hcb=2&ved=2ahUKEwjuluPp1IaJAxUFiv0HHcKJHyIQM3oECG8QAA",
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

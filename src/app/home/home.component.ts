import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CaroselloComponent } from '../carosello/carosello.component';

interface Box{
  id:number,
  titolo:string,
  img:string,
  type: "massa" | "salute" | "recupero" | "performance"
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule,RouterOutlet,RouterLink,CaroselloComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Titolo = ["Massa", "Salute", "Recupero", "Performance"];

  arr:Box[]= 
  [
    {
      id:0,
      titolo:"Massa",
      img:"https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-lightning-icon-image_1338425.jpg",
      type:"massa"
    },
    {
      id:1,
      titolo:"Salute",
      img:"https://png.pngtree.com/png-clipart/20231002/original/pngtree-minimal-simple-cute-heart-png-image_13066659.png",
      type:"salute"
    },
    {
      id:2,
      titolo:"Recupero",
      img:"https://www.myamericanshop.it/cdn/shop/files/gatorade-cool-blue-055577420270-51379494322507.jpg?v=1704731965",
      type:"recupero"
    },
    {
      id:3,
      titolo:"Performance",
      img:"https://static.thenounproject.com/png/1221123-200.png",
      type:"performance"
    },
  ]
  
}

import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';

interface Box{
  id:number,
  titolo:string,
  img:string,
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule,RouterOutlet,RouterLink],
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
      img:"https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-lightning-icon-image_1338425.jpg"
    },
    {
      id:1,
      titolo:"Salute",
      img:"https://png.pngtree.com/png-clipart/20231002/original/pngtree-minimal-simple-cute-heart-png-image_13066659.png"
    },
    {
      id:2,
      titolo:"Recupero",
      img:"https://www.myamericanshop.it/cdn/shop/files/gatorade-cool-blue-055577420270-51379494322507.jpg?v=1704731965"
    },
    {
      id:3,
      titolo:"Performance",
      img:"https://static.thenounproject.com/png/1221123-200.png"
    },
  ]
}

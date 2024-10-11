import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenubarModule, AvatarModule, InputTextModule, RippleModule, CommonModule,CarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;
  
    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                routerLink: ['']
            },
            {
                label: 'Prodotti',
                routerLink: ['prodotti']
            }
        ];
    }
}



import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { CaroselloComponent } from './carosello/carosello.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "prodotti",
        component: ProdottiComponent
    },
    {
        path:"carosello",
        component: CaroselloComponent
    }
];

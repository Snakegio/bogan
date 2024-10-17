import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { SchedaprodComponent } from './schedaprod/schedaprod.component';

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
        path: "schede",
        component: SchedaprodComponent
    }
];

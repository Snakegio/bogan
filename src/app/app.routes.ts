import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { PProdottoComponent } from './p-prodotto/p-prodotto.component';

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
        path: "test",
        component: PProdottoComponent
    }
];

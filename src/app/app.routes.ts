import { Routes } from '@angular/router';
import {ProduitsComponent} from './features/produits/pages/produits.component';
import {IndexComponent} from './features/index/components/index.component';

export const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
  },
  {
    path: "produits",
    component: ProduitsComponent
  }
];

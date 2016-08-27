import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent } from './hero-list.component';
import { MyPets } from './components/my-pets/my-pets';

const AppRoutes: Routes = [
  { path: '', component: MyPets, pathMatch: 'full' },
  { path: 'heroes', component: HeroListComponent },
  { path: 'pets', component: MyPets }
];

export const AppRoutingProviders: any[] = [

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes);

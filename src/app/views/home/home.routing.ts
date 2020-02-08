import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AllSectionsComponent } from './all-sections.component';

export const HomeRoutes: Routes = [
  { path: 'one', component: HomeComponent },
  { path: 'all', component: AllSectionsComponent }
];
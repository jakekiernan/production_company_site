import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainView, WorkView, ReelsView, AboutView, ContactView } from './views';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainView },
  { path: 'work', component: WorkView},
  { path: 'reels', component: ReelsView},
  { path: 'about', component: AboutView},
  { path: 'contact', component: ContactView}  
]
export const routing = RouterModule.forRoot(APP_ROUTES);

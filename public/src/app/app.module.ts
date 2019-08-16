import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { Header, AppModal, AppNav, CircleFeature, ReelFeature, ServicesFeature, ManifestoFeature, Footer, GoogleChartDirective, FriendsMap, TeamReels, AboutComponent, ContactComponent, WorkComponent } from './components';
import { MainView, WorkView, ReelsView, AboutView, ContactView } from './views';
import { SafePipe } from './pipes';
import { ui } from './reducers';

@NgModule({
    declarations: [
        AppComponent,
        Header, AppModal, AppNav, CircleFeature, ReelFeature, ServicesFeature, ManifestoFeature, Footer, GoogleChartDirective, FriendsMap, TeamReels, AboutComponent, ContactComponent,WorkComponent,
        MainView, WorkView, ReelsView, AboutView, ContactView,
        SafePipe,
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({ui: ui}),
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

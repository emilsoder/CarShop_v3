import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule, routedComponents} from './app-routing.module';
import {AuctionService, PubSubService} from './_services/index';
import {HttpModule} from "@angular/http";
import {AuctionFilterComponent} from "./_auction/auction-filter/auction-filter.component";
import {HttpService} from "./_services/http.service";
import {AuctionFilterService} from "./_services/sidebar-filter.service";
import {AuctionFilterHeaderComponent} from "./_auction/auction-filter-header/auction-filter-header.component";

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        routedComponents,
        AuctionFilterComponent,
        AuctionFilterHeaderComponent
    ],
    providers: [
        HttpService,
        AuctionFilterService,
        AuctionService,
        PubSubService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
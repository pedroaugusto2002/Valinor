import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { ChampionDetailComponent } from './components/champion-detail/champion-detail.component';
import { HeaderComponent } from './components/header/header.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { FreeweekComponent } from './components/freeweek/freeweek.component';
import { TotopbuttonComponent } from './components/totopbutton/totopbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionsComponent,
    ChampionDetailComponent,
    HeaderComponent,
    SearchComponent,
    FreeweekComponent,
    TotopbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public  key:string = 'RGAPI-6e0b8316-116a-4e66-a0c4-26050b04d786'
  public  path:string = '13.5.1'
 }

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MovieItemComponent } from './components/movie-list/movie-item/movie-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MovieListComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

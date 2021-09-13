import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { HttpClientModule } from '@angular/common/http'; //NewsAPI'ye request yapmak için bunu kullanacağız.
import {NewsApiServiceService} from "./services/news-api-service.service";
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BusiNewsComponent } from './busi-news/busi-news.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { ScienceNewsComponent } from './science-news/science-news.component'
@NgModule({
  declarations: [AppComponent, TopHeadingComponent, TechNewsComponent, BusiNewsComponent, HealthNewsComponent, SportsNewsComponent, ScienceNewsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusiNewsComponent } from './busi-news/busi-news.component';
import { HealthNewsComponent } from './health-news/health-news.component';
import { ScienceNewsComponent } from './science-news/science-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';

const routes: Routes = [
  {path:"", component:TopHeadingComponent},
  {path:"tech", component:TechNewsComponent},
  {path:"business", component:BusiNewsComponent},
  {path:"health", component:HealthNewsComponent},
  {path:"sports",component:SportsNewsComponent},
  {path:"science",component:ScienceNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationComponent } from './animation/animation.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioModule } from 'src/portfolio/portfolio.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    SocialMediaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortfolioModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

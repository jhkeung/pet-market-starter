import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { HeaderComponent } from './header/header.component';
import { ApplicationComponent } from './application/application.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GalleryComponent,
    PetDetailComponent,
    HeaderComponent,
    ApplicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

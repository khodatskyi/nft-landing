import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { ArtworksComponent } from './components/artworks/artworks.component';
import { MembershipComponent } from './components/membership/membership.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/home/features/features.component';
import { CreatorsComponent } from './components/home/creators/creators.component';
import { TrendComponent } from './components/home/trend/trend.component';
import { NextGenerationComponent } from './components/home/next-generation/next-generation.component';
import { LogoComponent } from './components/home/logo/logo.component';
import { AdComponent } from './components/home/ad/ad.component';
import { FooterComponent } from './components/shared-components/footer/footer.component';
import { BreadcrumbsComponent } from './components/shared-components/breadcrumbs/breadcrumbs.component';
import { AboutUsComponent } from './components/about/about-us/about-us.component';
import { ValuesComponent } from './components/about/values/values.component';
import { RoadmapComponent } from './components/about/roadmap/roadmap.component';
import { TeamComponent } from './components/about/team/team.component';
import { DigitalArtComponent } from './components/about/digital-art/digital-art.component';
import { CardsComponent } from './components/artworks/cards/cards.component';
import { PaginationComponent } from './components/artworks/pagination/pagination.component';
import { FiltrationComponent } from './components/artworks/filtration/filtration.component';
import { MembersCardsComponent } from './components/membership/members-cards/members-cards.component';
import { ContactUsComponent } from './components/contact/contact-us/contact-us.component';
import { WorkWithUsComponent } from './components/contact/work-with-us/work-with-us.component';
import { FAQComponent } from './components/contact/faq/faq.component';
import { CartComponent } from './components/cart/cart.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    ArtworksComponent,
    MembershipComponent,
    ContactComponent,
    HomeComponent,
    FeaturesComponent,
    CreatorsComponent,
    TrendComponent,
    NextGenerationComponent,
    LogoComponent,
    AdComponent,
    FooterComponent,
    BreadcrumbsComponent,
    AboutUsComponent,
    ValuesComponent,
    RoadmapComponent,
    TeamComponent,
    DigitalArtComponent,
    CardsComponent,
    PaginationComponent,
    FiltrationComponent,
    MembersCardsComponent,
    ContactUsComponent,
    WorkWithUsComponent,
    FAQComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

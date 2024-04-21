import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ArtworksComponent } from './components/artworks/artworks.component'; 
import { ContactComponent } from './components/contact/contact.component'; 
import { MembershipComponent } from './components/membership/membership.component'; 
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'artworks', component: ArtworksComponent }, 
  { path: 'contact', component: ContactComponent }, 
  { path: 'membership', component: MembershipComponent }, 
  { path: 'cart', component: CartComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

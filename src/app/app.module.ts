import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeVehiculesComponent } from './components/liste-vehicules/liste-vehicules.component';
import { AddVehiculeComponent } from './components/add-vehicule/add-vehicule.component';
import { FormsModule } from "@angular/forms";
import { AccueilComponent } from './components/accueil/accueil.component';
const routers: Routes= [
  {path: 'vehicules', component: ListeVehiculesComponent},
  {path: 'addvehicule', component: AddVehiculeComponent},
  {path: 'editvehicule/:id', component: AddVehiculeComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: '', redirectTo: '/vehicules', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ListeVehiculesComponent,
    AddVehiculeComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

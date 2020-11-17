import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ChartTicketSemanalComponent } from './components/chartticketsemanal/chartticketsemanal.component';
import { ChartClientesComponent } from './components/chartclientes/chartclientes.component';

import { ChartsModule } from 'ng2-charts';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ChartpromedioatencionComponent } from './components/chartpromedioatencion/chartpromedioatencion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartTicketSemanalComponent,
    ChartClientesComponent,
    NavbarComponent,
    ChartpromedioatencionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

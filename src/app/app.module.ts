import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './home/characters/characters.component';
import { AboutComponent } from './home/about/about.component';
import { DetalleComponent } from './home/characters/detalle/detalle.component';
import { BienvenidaComponent } from './home/bienvenida/bienvenida.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './util/navbar/navbar.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CharactersComponent,
    AboutComponent,
    DetalleComponent,
    BienvenidaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

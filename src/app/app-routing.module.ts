import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { CharactersComponent } from './home/characters/characters.component';
import { DetalleComponent } from './home/characters/detalle/detalle.component';
import { BienvenidaComponent } from './home/bienvenida/bienvenida.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'


const routes: Routes = [
  {path:"", redirectTo: '/home', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent },
  {path: 'home', component: BienvenidaComponent},
  {path: 'about', component: AboutComponent}, 
  {path: 'characters', component: CharactersComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path: 'detalles/:id', component:DetalleComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

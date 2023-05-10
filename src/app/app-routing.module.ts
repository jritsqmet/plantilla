import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { RegistroComponent } from './components/registro/registro.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'login', component: LoginComponent },
  { path: 'privado', component:PrivadoComponent, canActivate:[LoginGuard]},
  { path: 'registro', component: RegistroComponent},
  { path: 'logout', component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

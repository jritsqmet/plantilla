import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'login', component: LoginComponent },
  { path: 'privado', component:PrivadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

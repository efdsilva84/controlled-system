import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CadUserComponent } from './pages/cad-user/cad-user.component';
import { ListaUserComponent } from './pages/lista-user/lista-user.component';
import { CadUserCredencialComponent } from './pages/cad-user-credencial/cad-user-credencial.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'cad-user', component: CadUserComponent},
  {path: 'listar-user', component: ListaUserComponent},
  {path: 'cad-cred', component: CadUserCredencialComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

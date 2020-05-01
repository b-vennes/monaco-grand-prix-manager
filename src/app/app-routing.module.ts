import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GrandPrixComponent} from './grand-prix/grand-prix.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'grand-prix/:teamName', component: GrandPrixComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

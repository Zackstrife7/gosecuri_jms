import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersLoginComponent } from './users-login/users-login.component';



const routes: Routes = [
  {
    path: 'users',
    component: UsersLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

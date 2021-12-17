import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users/users.component';
import { ServersComponent } from './servers/servers/servers.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CreateUserComponent } from './users/create-user/create-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
},
{
    path: 'users',
    component: UsersComponent
},
{
    path: 'servers',
    component: ServersComponent
},
{
  path: 'adduser',
  component:CreateUserComponent
},
{
  path: '**',
  component: NotFoundComponent
},
{
  path: 'home',
  component:HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

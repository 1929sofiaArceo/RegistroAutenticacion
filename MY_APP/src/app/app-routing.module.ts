import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ChatComponent } from './pages/chat/chat.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'}, //ya me redirije a login
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  { path: '404', component: NotFoundComponent},
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

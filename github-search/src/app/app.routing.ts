import { RouterModule } from '@angular/router';
import { GithubComponent } from './github.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { InstaComponent } from './insta.component';
import { GithubUserComponent } from './githubuser.component';

import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login.component';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'github', component: GithubComponent, canActivate: [AuthGuard] },
  { path: 'github/user/:login/:score', component: GithubUserComponent, canActivate: [AuthGuard] },
  { path: 'insta', component: InstaComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canDeactivate: [PreventUnsavedChangesGuard] },
  { path: '**', component: NotFoundComponent },
]);

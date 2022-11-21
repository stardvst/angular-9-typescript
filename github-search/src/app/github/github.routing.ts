import { RouterModule } from '@angular/router';
import { GithubComponent } from './github.component';
import { GithubUserComponent } from './githubuser.component';

import { AuthGuard } from '../login/auth-guard.service';

export const GithubRouting = RouterModule.forRoot([
  { path: 'github', component: GithubComponent, canActivate: [AuthGuard] },
  { path: 'github/user/:login/:score', component: GithubUserComponent, canActivate: [AuthGuard] },
]);

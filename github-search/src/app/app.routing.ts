import { RouterModule } from '@angular/router';
import { GithubComponent } from './github.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { InstaComponent } from './insta.component';
import { GithubUserComponent } from './githubuser.component';

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'github', component: GithubComponent },
  { path: 'github/user/:login/:score', component: GithubUserComponent },
  { path: 'insta', component: InstaComponent },
  { path: '**', component: NotFoundComponent },
]);

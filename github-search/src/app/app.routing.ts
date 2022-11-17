import { RouterModule } from '@angular/router';
import { GithubComponent } from './github.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { InstaComponent } from './insta.component';

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'github', component: GithubComponent },
  { path: 'insta', component: InstaComponent },
  { path: '**', component: NotFoundComponent },
]);

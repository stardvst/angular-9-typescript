import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { UserFormComponent } from './user-form.component';
import { UserComponent } from './user.component';

export const routing = RouterModule.forRoot([
  { path: '', component: UserComponent },
  { path: 'add', component: UserFormComponent },
  { path: 'add/:id', component: UserFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:invalidLoginMessage', component: LoginComponent },
]);

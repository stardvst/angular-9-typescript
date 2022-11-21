import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { LoginComponent } from './login/login.component';
import { PreventUnsavedChangesGuard } from './login/prevent-unsaved-changes-guard.service';

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canDeactivate: [PreventUnsavedChangesGuard] },
  { path: '**', component: NotFoundComponent },
]);

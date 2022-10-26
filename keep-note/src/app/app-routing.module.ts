import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { LoginComponent } from './login/login.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CanActiveLoginGuard } from './services/can-active-login.guard';
import { CanDeactivateGuard } from './services/can-deactivate.guard';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"note", component:DashboardComponent, canActivate:[CanActiveLoginGuard]},
  {path:"note/:id", component:EditNoteComponent, canDeactivate:[CanDeactivateGuard]},
  {path:"login", component:LoginComponent},
  {path:"registrationForm", component:RegistrationFormComponent},
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

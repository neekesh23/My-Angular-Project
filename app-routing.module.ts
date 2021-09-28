import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:"" , redirectTo:"userlist", pathMatch:"full"},
  {path:"userlist", component:UserListComponent},
  {path:"edit/:id",component:EditUserComponent},
  {path:"users/:id",component:SingleUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UserCreateComponent } from "./user-create/user-create.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "users",
      breadCrumbs: [
        { name: "home", path: "/panel" },
        { name: "users", path: "/panel/users" }
      ]
    },
    component: UsersComponent
  },
  {
    path: "create",
    data: {
      title: "user create",
      breadCrumbs: [
        { name: "home", path: "/panel" },
        { name: "users", path: "/panel/users" },
        { name: "create", path: "/panel/users/create" }
      ]
    },
    component: UserCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}

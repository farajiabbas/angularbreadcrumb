import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "dashboard",
      breadCrumbs: [
        { name: "home", path: "/panel" },
        { name: "dashboard", path: "/panel/dashboard" }
      ]
    },
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}

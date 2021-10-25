import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileContractorComponent} from "./profile-contractor/profile-contractor.component";
import {ControlmenuComponent} from "./controlmenu/controlmenu.component";
import {SearchContractorComponent} from "./search-contractor/search-contractor.component";
import {ProjectinProgressComponent} from "./projectin-progress/projectin-progress.component";
import {ProjectsComponent} from "./projects/pages/projects/projects.component";
import {ControlMenuComponent} from "./projects/pages/control-menu/control-menu.component";

const routes: Routes = [
 {path:'searchContractor',component:SearchContractorComponent},
 {path:'profileContractor',component:ProfileContractorComponent},
 {path:'controlMenu',component:ControlmenuComponent},
 {path:'projectProgress',component:ProjectinProgressComponent},
 { path:'Projects/ongoing', component: ProjectsComponent},
 { path:'Projects/ongoing/control-menu', component: ControlMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

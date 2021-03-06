import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileContractorComponent} from "./profile-contractor/profile-contractor.component";
import {ControlmenuComponent} from "./controlmenu/controlmenu.component";
import {SearchContractorComponent} from "./search-contractor/search-contractor.component";
import {ProjectinProgressComponent} from "./projectin-progress/projectin-progress.component";
import {ProjectsComponent} from "./projects/pages/projects/projects.component";
import {ControlMenuComponent} from "./projects/pages/control-menu/control-menu.component";
import {HomeComponent} from "./home/home.component";
import {FinalProject2Component} from "./final-project2/final-project2.component";


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'Home', component: HomeComponent },
  { path: 'FinaleProject', component: FinalProject2Component},
  {path:'searchContractor',component:SearchContractorComponent},
  {path:'profileContractor',component:ProfileContractorComponent},
  {path:'controlMenu',component:ControlmenuComponent},
  {path:'projectProgress',component:ProjectinProgressComponent}
  {path:'Projects/ongoing', component: ProjectsComponent},
  {path:'Projects/ongoing/control-menu', component: ControlMenuComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

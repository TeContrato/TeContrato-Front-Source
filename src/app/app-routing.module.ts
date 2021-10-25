import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileContractorComponent} from "./profile-contractor/profile-contractor.component";
import {ControlmenuComponent} from "./controlmenu/controlmenu.component";
import {SearchContractorComponent} from "./search-contractor/search-contractor.component";
import {ProjectinProgressComponent} from "./projectin-progress/projectin-progress.component";

const routes: Routes = [
 {path:'searchContractor',component:SearchContractorComponent},
 {path:'profileContractor',component:ProfileContractorComponent},
 {path:'controlMenu',component:ControlmenuComponent},
 {path:'projectProgress',component:ProjectinProgressComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

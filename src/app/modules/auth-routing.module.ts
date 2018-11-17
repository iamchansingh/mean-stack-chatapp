import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthTabsComponent } from '../components/auth-tabs/auth-tabs.component';
const routers:Routes=[
  {
    path:'',
    component:AuthTabsComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routers)
  ],
  exports :[ RouterModule]
})
export class AuthRoutingModule { }

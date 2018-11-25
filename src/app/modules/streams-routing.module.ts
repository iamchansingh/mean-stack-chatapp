import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { StreamsComponent } from '../components/streams/streams.component';
const routers:Routes=[
  {
    path:'streams',
    component:StreamsComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routers)
  ],
  exports :[ RouterModule]
})
export class StreamsRoutingModule { }

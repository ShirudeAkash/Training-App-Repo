import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FirstModuleModule } from './first-module/first-module.module';
import { MyFirstComponentComponent } from './first-module/my-first-component/my-first-component.component';

const routes: Routes = [ {
  path: 'FirstModuleModule', component: MyFirstComponentComponent
},
{ path: 'counter', component: CounterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

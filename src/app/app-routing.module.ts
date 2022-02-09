import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstModuleModule } from './first-module/first-module.module';
import { MyFirstComponentComponent } from './first-module/my-first-component/my-first-component.component';

const routes: Routes = [ {
  path: 'FirstModuleModule', component: MyFirstComponentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

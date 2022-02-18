import { EventComponent } from './event/event.component';
import { ActiveGuard } from './active.guard';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent,},
  {path:'about',component:AboutComponent,canActivate:[ActiveGuard]},
  {path:'login',component:LoginComponent,},
  {path:'contact',component:ContactComponent,canActivate:[ActiveGuard]},
  {path:'cal/:id',component:EventComponent,canActivate:[ActiveGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

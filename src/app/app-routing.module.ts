import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { InsightsComponent } from './insights/insights.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { Login } from './_guards/login.service';
import { UnsavedChangesGuard } from './_guards/un-saved-changes-guard.service';


const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'insights', component: InsightsComponent
  },
  {
    path:'services',
    loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
  },
  {
    path:'careers', component: CareersComponent
  },
  {
    path:'industries', component: IndustriesComponent,canActivate:[Login]
  },
  {
    path:'about', component: AboutComponent
  },
  {
    path:'contact', component: ContactComponent
  },
  {
    path:'login', component: LoginComponent,canDeactivate:[UnsavedChangesGuard]
  },
  {
    path:'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
  },
  {
    path:'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'rxjs-operators', component: RxjsOperatorsComponent
  },
  {
    path:'local-itemlist',
    loadChildren: () => import('./local-itemlist/local-itemlist.module').then(m => m.LocalItemlistModule)
  },
  {
    path:'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path:'material',
    loadChildren: () => import('./_material/material.module').then(m => m.MaterialModule)
  },
  {
    path:'custom-pipes',
    loadChildren: () => import('./custom-pipes/custom-pipes.module').then(m => m.CustomPipesModule)
  },
  {
    path:'search-posts',
    loadChildren: () => import('./search-posts/search-posts.module').then(m => m.SearchPostsModule)
  },
  {
    path:'**',component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

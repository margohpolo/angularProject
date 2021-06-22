import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InsightsComponent } from './insights/insights.component';
import { IndustriesComponent } from './industries/industries.component';
import { CareersComponent } from './careers/careers.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

// lazy laoded Service module
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

//Loading UnsavedChangesGuard
import { UnsavedChangesGuard } from './_guards/un-saved-changes-guard.service';
import { UserDataDisplayComponent } from './user-data-display/user-data-display.component';
import { HighlightDirective } from './_directives/highlight.directive';
import { CustomLoopDirective } from './_directives/custom-loop.directive';
import { RotateAnimationDirective } from './_directives/rotate-animation.directive';
import { ServicesComponent } from './services/services.component';
import { ServicecardComponent } from './services/servicecard/servicecard.component';
import { PlaceholderDirective } from './services/placeholder/placeholder.directive';
import { ServiceResolver } from './services/serviceresolver.service';
import { ServiceSvc } from './services/services.service';
import { ContactService } from './contact/contact.service';
import { UsernameDirective } from './contact/username.directive';
import { EmailDirective } from './contact/email.directive';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    AboutComponent,
    InsightsComponent,
    IndustriesComponent,
    CareersComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    PageNotFoundComponent,
    ServicesComponent,
    ServicecardComponent,
    LoginComponent,
    UserDataDisplayComponent,
    HighlightDirective,
    CustomLoopDirective,
    RotateAnimationDirective,
    PlaceholderDirective,
    UsernameDirective,
    EmailDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UnsavedChangesGuard, ServiceSvc, ServiceResolver, ContactService],
  bootstrap: [AppComponent],
  entryComponents: [
    ServicecardComponent
  ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './comps/c1/c1.component';
import { C3Component } from './comps/c3/c3.component';
import { C2Component } from './comps/c2/c2.component';
import { LoginGoogleComponent } from './comps/login-google/login-google.component';
import { MatrialModule } from './matrial/matrial.module';
import { LoginGuard } from './login.guard';
import { SocialLoginModule,SocialAuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";


@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    LoginGoogleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatrialModule,
    SocialLoginModule
  ],
  providers: [LoginGuard,  {
    provide: "SocialAuthServiceConfig",
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '868568893232-qa41m4tthpdtovt3qefbpitritgtn4jr.apps.googleusercontent.com'
            
           
          )
        }
      ]
    } as SocialAuthServiceConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

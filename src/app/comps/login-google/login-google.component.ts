import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { AjaxService } from 'src/app/services/ajax.service';

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.css']
})
export class LoginGoogleComponent implements OnInit {

  public user: SocialUser = new SocialUser;
  constructor(private authService: SocialAuthService, public srv: AjaxService, private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.srv.loading = (user != null && user != undefined);
      this.srv.user = user;
      this.router.navigate(['/home'])
      console.log(user);
    });
  }
  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  public signOut(): void {
    this.authService.signOut();
  }

}

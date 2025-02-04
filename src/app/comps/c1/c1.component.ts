import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { Data } from 'src/app/module/data';
import { AjaxService } from 'src/app/services/ajax.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  panelOpenState = false;
  public user!: SocialUser
  data: Data[] = []
  public sumshow:boolean = false;
  public admin:boolean = false
  constructor(public mvc: AjaxService, private authService: SocialAuthService, private router: Router) { }

  ngOnInit(): void {
    console.log('user logind: ', this.mvc.loading, 'user:', this.mvc.user)
    this.authService.authState.subscribe(user => {
      this.user = user
      if(Object.values(this.user).indexOf('a0548475725@gmail.com')>-1 ){
      this.admin = true
      }
    })
    this.mvc.httppost("/api/add", this.user).subscribe(response => {console.log(response)})
   
  }

  public async signOut(): Promise<void> {

    await this.authService.signOut(true);
    console.log('this.mvc.loading:', this.mvc.loading);
    this.mvc.loading = false;
    console.log('this.mvc.loading:', this.mvc.loading);
    this.router.navigate(['/login'])

  }
}

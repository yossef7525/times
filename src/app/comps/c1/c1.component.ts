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
  myDate = new Date()
  public timeA = new Date()
  public time = new Date()
  public timeB!: number
  timeron: boolean = false;
  panelOpenState = false;
  public user: SocialUser = new SocialUser;
  data: Data[] = []
  constructor(public mvc: AjaxService, private authService: SocialAuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user
    })
    this.mvc.httpget("https://raw.githubusercontent.com/yossef7525/angular-router/master/src/data.json")
      .subscribe(response => {
        this.data = response["data"]
        console.log(this.data);

      })
  }
  public starttimer(): void {
    this.timeron = true;
    this.timeA = new Date();
    setInterval(() => { this.time = new Date(), this.timeB = this.time.getTime() - this.timeA.getTime() }, 1);
  }
  public async signOut(): Promise<void> {

    await this.authService.signOut(true);
    console.log('this.mvc.loading:', this.mvc.loading);
    this.mvc.loading = false;
    console.log('this.mvc.loading:', this.mvc.loading);
    this.router.navigate(['/login'])

  }
}
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
  public timer:any
  public timeA = new Date()
  public time = new Date()
  public timeB!: string
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
  this.timer = setInterval(() => { 
      this.time = new Date();
       var ms = this.time.getTime() - this.timeA.getTime()
       
      var seconds = Math.floor((ms / 1000) %60)
      var minutes = Math.floor((ms / (1000 * 60)) %60)
      var hours = Math.floor((ms / (1000 * 60 * 60)) %24)
      hours = (hours < 10) ? Number(`0${hours}`) : hours
      minutes = (minutes < 10) ? Number(`0${minutes}`) : minutes
      seconds = (seconds < 10) ? Number(`0${seconds}`) : seconds
      console.log(hours,minutes, seconds);
      
      this.timeB = `${hours}:${minutes}:${seconds}`
      }, 1000);
  }
  public offttimer(): void {
    
    var req = {
      data: `${this.myDate.getDate()}/${this.myDate.getMonth()+1}/${this.myDate.getFullYear()}`,
      timestart: this.timeA,
      timeend: this.time,
      sumtime: this.timeB,
      seconds: this.time.getTime() - this.timeA.getTime()
    }
    console.log('req:', req);
    // http.post('/???????', req)....
    this.timeron = false;
    clearInterval(this.timer);
  }
  public async signOut(): Promise<void> {

    await this.authService.signOut(true);
    console.log('this.mvc.loading:', this.mvc.loading);
    this.mvc.loading = false;
    console.log('this.mvc.loading:', this.mvc.loading);
    this.router.navigate(['/login'])

  }
}

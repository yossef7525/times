import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timerpage',
  templateUrl: './timerpage.component.html',
  styleUrls: ['./timerpage.component.css']
})
export class TimerpageComponent implements OnInit {
  myDate = new Date()
  public timer:any
  public timeA = new Date()
  public time = new Date()
  public timeB!: string
  timeron: boolean = false;
  constructor() { }

  ngOnInit(): void {
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
}

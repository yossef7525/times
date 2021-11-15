import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/app/services/ajax.service';

@Component({
  selector: 'app-timerpage',
  templateUrl: './timerpage.component.html',
  styleUrls: ['./timerpage.component.css']
})
export class TimerpageComponent implements OnInit {
  myDate = new Date()
  public timer: any
  public timeA = new Date()
  public time = new Date()
  public timeB!: string
  timeron: boolean = false;
  constructor(public srv: AjaxService) { }

  ngOnInit(): void {
    this.srv.httppost('/api/gettimeron', { user: this.srv.user })
      .subscribe(response => {
        if (response != null) {
          this.timeA = new Date(response[0].dataon)
          console.log('timeA:', this.timeA);
          this.timeron = true;
          this.timer = setInterval(() => {
            this.time = new Date();
            var ms = this.time.getTime() - this.timeA.getTime()

            var seconds = Math.floor((ms / 1000) % 60)
            var minutes = Math.floor((ms / (1000 * 60)) % 60)
            var hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
            var hour: any = (hours < 10) ? `0${hours}` : hours
            var minute: any = (minutes < 10) ? `0${minutes}` : minutes
            var second: any = (seconds < 10) ? `0${seconds}` : seconds
            console.log(hour, minute, second);


            this.timeB = `${hour}:${minute}:${second}`
          }, 1000);
        }

      })
  }
  public starttimer(): void {
    this.timeron = true;
    this.timeA = new Date();
    this.srv.httppost('api/addtimeruser', { user: this.srv.user, data: this.timeA }).subscribe(response => console.log(response))
    this.timer = setInterval(() => {
      this.time = new Date();
      var ms = this.time.getTime() - this.timeA.getTime()

      var seconds = Math.floor((ms / 1000) % 60)
      var minutes = Math.floor((ms / (1000 * 60)) % 60)
      var hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
      var hour: any = (hours < 10) ? `0${hours}` : hours
      var minute: any = (minutes < 10) ? `0${minutes}` : minutes
      var second: any = (seconds < 10) ? `0${seconds}` : seconds
      console.log(hour, minute, second);

      this.timeB = `${hour}:${minute}:${second}`
    }, 1000);
  }
  public offttimer(): void {
    this.srv.httppost('api/deletetimeron', { user: this.srv.user }).subscribe(response => console.log(response))
    var req = {
      data: `${this.myDate.getDate()}/${this.myDate.getMonth() + 1}/${this.myDate.getFullYear()}`,
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

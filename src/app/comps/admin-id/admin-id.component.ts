import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Times } from 'src/app/module/times';
import { AjaxService } from 'src/app/services/ajax.service';
import { HDate } from '@hebcal/core';

@Component({
  selector: 'app-admin-id',
  templateUrl: './admin-id.component.html',
  styleUrls: ['./admin-id.component.css']
})
export class AdminIdComponent implements OnInit {
public id!: any
public email!: string
public times: Times[] = []
  public sum :string = '00:00:00'
  
  displayedColumns: string[] = ['data', 'hdata','day', 'start', 'end', 'sumtimer'];
  constructor(public route: ActivatedRoute , public srv:AjaxService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.email = params['email'];
   }) 
this.srv.httppost('./api/admingettimes',{email:this.email})
   .subscribe(response => {let secondssum = 0
    response.forEach(function (element: any) {
     secondssum = secondssum + element.seconds
      var h = new Date(element.start)
      element.start = `${(new Date(element.start).getHours() < 10) ? '0' + new Date(element.start).getHours() : new Date(element.start).getHours()}:${(new Date(element.start).getMinutes() < 10) ? '0' + new Date(element.start).getMinutes() : new Date(element.start).getMinutes()}:${(new Date(element.start).getSeconds() < 10) ? '0' + new Date(element.start).getSeconds() : new Date(element.start).getSeconds()}`
      element.end = `${(new Date(element.end).getHours() < 10) ? '0' + new Date(element.end).getHours() : new Date(element.end).getHours()}:${(new Date(element.end).getMinutes() < 10) ? '0' + new Date(element.end).getMinutes() : new Date(element.end).getMinutes()}:${(new Date(element.end).getSeconds() < 10) ? '0' + new Date(element.end).getSeconds() : new Date(element.end).getSeconds()}`
      console.log('h: ' ,h);
      switch (h.getDay()) {
        case 0:
          element.day = "ראשון";
          break;
        case 1:
          element.day = "שני";
          break;
        case 2:
          element.day = "שלישי";
          break;
        case 3:
          element.day = "רביעי";
          break;
        case 4:
          element.day = "חמישי";
          break;
        case 5:
          element.day = "שישי";
          break;
        case 6:
          element.day = "שבת";
      }
      element.hdata = new HDate(h).renderGematriya()
      
    });
    var seconds = Math.floor((secondssum / 1000) % 60)
  var minutes = Math.floor((secondssum / (1000 * 60)) % 60)
  var hours = Math.floor((secondssum / (1000 * 60 * 60)))
  var hour: any = (hours < 10) ? `0${hours}` : hours
  var minute: any = (minutes < 10) ? `0${minutes}` : minutes
  var second: any = (seconds < 10) ? `0${seconds}` : seconds
  console.log(hour, minute, second);

  this.sum = `${hour}:${minute}:${second}`
    this.times = response

    console.log(response)
  })
  }

}

import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { HDate } from '@hebcal/core';
import { Times } from 'src/app/module/times';
import { AjaxService } from 'src/app/services/ajax.service';

@Component({
  selector: 'app-totaltimes',
  templateUrl: './totaltimes.component.html',
  styleUrls: ['./totaltimes.component.css']
})

export class TotaltimesComponent implements OnInit {

  constructor(public srv: AjaxService) { }
  public gettimesmonth: Date = new Date()
  public times: Times[] = []

  displayedColumns: string[] = ['data', 'start', 'end', 'sumtimer'];
  // dataSource = this.times

  ngOnInit(): void {
    this.srv.httppost('/api/getlisttimesforuser', { user: this.srv.user, months: this.gettimesmonth.getMonth() + 1, your: this.gettimesmonth.getFullYear() })
      .subscribe(response => {
        response.forEach(function (element: any) {
          element.start = `${(new Date(element.start).getHours() < 10) ? '0' + new Date(element.start).getHours() : new Date(element.start).getHours()}:${(new Date(element.start).getMinutes() < 10) ? '0' + new Date(element.start).getMinutes() : new Date(element.start).getMinutes()}:${(new Date(element.start).getSeconds() < 10) ? '0' + new Date(element.start).getSeconds() : new Date(element.start).getSeconds()}`
          element.end = `${(new Date(element.end).getHours() < 10) ? '0' + new Date(element.end).getHours() : new Date(element.end).getHours()}:${(new Date(element.end).getMinutes() < 10) ? '0' + new Date(element.end).getMinutes() : new Date(element.end).getMinutes()}:${(new Date(element.end).getSeconds() < 10) ? '0' + new Date(element.end).getSeconds() : new Date(element.end).getSeconds()}`
          element.hdata = new HDate(new Date(element.data)).renderGematriya()
        });
        this.times = response

        console.log(response)
      })
  }

}
// export class TableBasicExample {
//   displayedColumns: string[] = ['תאריך', 'שעת התחלה', 'שעת סיום', 'סך שעות'];
//   dataSource = [{}]
// }

import { state } from '@angular/animations';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { HDate } from '@hebcal/core';
import { Times } from 'src/app/module/times';
import { AjaxService } from 'src/app/services/ajax.service';
import TableToExcel from "@linways/table-to-excel";
import {MatDialog} from '@angular/material/dialog';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';







@Component({
  selector: 'app-totaltimes',
  templateUrl: './totaltimes.component.html',
  styleUrls: ['./totaltimes.component.css']
})

export class TotaltimesComponent implements OnInit {
  
 
  constructor(public srv: AjaxService,public dialog: MatDialog) { }
  public gettimesmonth: Date = new Date()
  public months = this.generateMonthsArray()
  public month:string = `${this.gettimesmonth.getMonth() + 1}/${this.gettimesmonth.getFullYear()}`
  public times: Times[] = []
  public sum :string = '00:00:00'
  
  displayedColumns: string[] = ['data', 'hdata','day', 'start', 'end', 'sumtimer'];
  // dataSource = this.times

  ngOnInit(): void {
    this.srv.httppost('/api/getlisttimesforuser', { user: this.srv.user, months: this.month})
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
      var hours = Math.floor((secondssum / (1000 * 60 * 60)) % 24)
      var hour: any = (hours < 10) ? `0${hours}` : hours
      var minute: any = (minutes < 10) ? `0${minutes}` : minutes
      var second: any = (seconds < 10) ? `0${seconds}` : seconds
      console.log(hour, minute, second);

      this.sum = `${hour}:${minute}:${second}`
        this.times = response

        console.log(response)
      })
  }
  public export(): void {
    let table = document.querySelector("#teb");
    TableToExcel.convert(table, {
      name: "שעות עבודה.xlsx",
      sheet: {
        name: "פירוט",
      },
    });
  }
  openDialog(data:Times) {
    const dialogRef = this.dialog.open(UpdateDialogComponent,{data});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.reqtimes()
    });
  }
public  reqtimes(): void {
  console.log('months:', this.month);
  
    this.srv.httppost('/api/getlisttimesforuser', { user: this.srv.user, months: this.month})
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
      var hours = Math.floor((secondssum / (1000 * 60 * 60)) % 24)
      var hour: any = (hours < 10) ? `0${hours}` : hours
      var minute: any = (minutes < 10) ? `0${minutes}` : minutes
      var second: any = (seconds < 10) ? `0${seconds}` : seconds
      console.log(hour, minute, second);

      this.sum = `${hour}:${minute}:${second}`
        this.times = response

        console.log(response)
      })
  }
 
public generateMonthsArray() {
    const months = [];
    const now = new Date();
    const start = new Date(now.getFullYear() - 2, now.getMonth(), 1); // שנתיים אחורה
    const end = new Date(now.getFullYear() + 1, now.getMonth() + 1, 1); // שנה קדימה
    
    while (start < end) {
        const month = start.getMonth() + 1; // חודשים ב-JavaScript מתחילים ב-0
        const year = start.getFullYear();
        months.push(`${month}/${year}`);
        start.setMonth(start.getMonth() + 1); // מעבר לחודש הבא
    }

    return months;
}
 public pdftest(): void {
   const el = document.getElementById('pdf') as HTMLElement
  const printContents:string = el.innerHTML;
  const originalContents = document.body
  document.body.innerHTML = printContents;
  window.print();
  location.reload();
  // document.body = originalContents;
   }

}
// export class TableBasicExample {
//   displayedColumns: string[] = ['תאריך', 'שעת התחלה', 'שעת סיום', 'סך שעות'];
//   dataSource = [{}]
// }

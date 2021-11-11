import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manualpage',
  templateUrl: './manualpage.component.html',
  styleUrls: ['./manualpage.component.css']
})
export class ManualpageComponent implements OnInit {

  public date = new Date();
  public time_a:any
  public time_b:any
  public restime:any
  constructor() { }

  ngOnInit(): void {
    
  }
public logs(ar1:any, ar2:any): void {

  var start = ar1.split(":");
  var  end = ar2.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);

    var results = (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
this.restime = results;


console.log({
  time_a: this.time_a,
  time_b: this.time_b,
  sumtimer: results

})
}
}

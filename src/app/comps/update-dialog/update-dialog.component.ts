import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Times } from 'src/app/module/times';
import { AjaxService } from 'src/app/services/ajax.service';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  public time_a: any
  public time_b: any
  public restime: any
  public errortime: boolean = false  
  public time!:Times
  public date!:Date
  constructor(public srv:AjaxService, @Inject(MAT_DIALOG_DATA) public data: Times , public dialogRef: MatDialogRef<UpdateDialogComponent>,) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    const dd = this.data.data.split('/');
    console.log('dd', dd);
    this.date = new Date(dd[2], dd[1] - 1, dd[0])
    this.time_a = this.data.start
    this.time_b = this.data.end

//     this.srv.httppost('/api/gettimesforid', {id: this.data.id})
//       .subscribe(response=>{
// this.time = response[0]
// this.time.data = new Date(response[0].start)
//       })
  }
  public testing(): void {
    this.errortime = (this.time_a < this.time_b ? false : true)
  }
  public logs(): void {
   
    if (this.errortime == true) {
      alert('אנא תקן את הנדרש')
    }else{
      this.dialogRef.close();
    var start = this.time_a.split(":");
    var end = this.time_b.split(":");
    var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), start[0], start[1], 0);
    var endDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);

    var results = (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
    this.restime = results;


    var req = {
      id: this.data.id,
      user: this.srv.user,
      data: `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`,
      start: startDate,
      end: endDate,
      sumtimer: `${results}:00`,
      seconds: endDate.getTime() - startDate.getTime(),
    }
    console.log('req:', req);
    this.srv.httppost('/api/updatetimesid', req).subscribe(response=>{console.log(response)});
   
    

  }}

}

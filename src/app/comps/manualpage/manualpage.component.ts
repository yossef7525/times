import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/app/services/ajax.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manualpage',
  templateUrl: './manualpage.component.html',
  styleUrls: ['./manualpage.component.css']
})
export class ManualpageComponent implements OnInit {
  isLinear = false;
  // firstFormGroup!: FormGroup;
  // secondFormGroup!: FormGroup;
  public date = new Date();
  public time_a: any
  public time_b: any
  public restime: any
  public errortime: boolean = false
  constructor(public srv:AjaxService) {

  }

  ngOnInit(): void {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required],
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required],
    // });

  }
  public testing(): void {
    this.errortime = (this.time_a < this.time_b ? false : true)
  }
  public logs(): void {
    if (this.errortime == true) {
      alert('אנא תקן את הנדרש')
    }else{
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
      user: this.srv.user,
      data: `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`,
      start: startDate,
      end: endDate,
      sumtimer: `${results}:00`,
      seconds: endDate.getTime() - startDate.getTime(),
    }
    console.log('req:', req);
    this.srv.httppost('/api/addtimeforuser', req).subscribe(response=>{console.log(response)});
   
    

  }}
}

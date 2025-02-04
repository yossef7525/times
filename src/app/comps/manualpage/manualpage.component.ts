import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/app/services/ajax.service';
import { Category } from '../category/category.component';
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
  public errordate:boolean = false
  public categorySelected!:number
  public category:Category[] = []
  constructor(public srv:AjaxService) {

  }

  ngOnInit(): void {
    this.srv.httppost('/api/getcategories', { user: this.srv.user }).subscribe(response => {
      this.category = response.data
    })

  }
  public testing(): void {
    this.errortime = (this.time_a < this.time_b ? false : true)
    this.errordate = (this.date == null ? true : false)
  }
  public logs(): void {
    this.testing();
    if (this.errortime == true || this.errordate == true) {
      alert('אנא תקן את הנדרש')
    }else{
      console.log(this.date);
      
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
      category: this.categorySelected
    }
    console.log('req:', req);
    this.srv.httppost('/api/addtimeforuser', req).subscribe(response=>{console.log(response)});
   
  this.date = new Date();
  this.time_a = ''
  this.time_b = ''

  }}
}

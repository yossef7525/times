import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/module/data';
import { AjaxService } from 'src/app/services/ajax.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {


  data:Data[]=[]
  constructor(public mvc: AjaxService) { }

  ngOnInit(): void {
    this.mvc.httpget("https://raw.githubusercontent.com/yossef7525/angular-router/master/src/data.json")
    .subscribe(response => {
      this.data = response["data"]
      console.log(this.data);
      
    })
  }

}

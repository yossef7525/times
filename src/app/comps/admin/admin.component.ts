import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/app/services/ajax.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public users!:[{firstname: string, lastname: string, email: string, image: string, id: number}]
  constructor(public srv:AjaxService) { }

  ngOnInit(): void {
    this.srv.httppost('/api/getlist',{}).subscribe(response => {
    console.log(response);
    
      this.users = response
    })
  }

}

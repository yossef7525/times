import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/app/services/ajax.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(public mvc: AjaxService) { }

  ngOnInit(): void {
    this.mvc.httpget()
  }

}

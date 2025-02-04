import { Component, OnInit } from '@angular/core';
import { AjaxService } from 'src/app/services/ajax.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public category: Category[] = []
  public name: string = ''
  constructor(public srv: AjaxService) { }

  ngOnInit(): void {
    this.srv.httppost('/api/getcategories', { user: this.srv.user })
      .subscribe(response => {
        this.category = response.data
      })
  }
  addCategory(){
    this.srv.httppost('/api/addcategory', { user: this.srv.user, name: this.name })
      .subscribe(response => {
        this.category.push({name: this.name})
        this.name = ''
      })
  }
  deleteCategory(id: number){
    this.srv.httppost('/api/deletecategory', { user: this.srv.user, id: id })
      .subscribe(response => {
        this.category = this.category.filter(item => item.id !== id)
      })
  }
}

export class Category {
  id? : any;
  name!: string
}


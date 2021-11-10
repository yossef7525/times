import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

public user:{}={}
 public loading:boolean = this.user != null;
  constructor(private http: HttpClient) {

    
  }
  httpget(url: string) :Observable <any> {
    return this.http.get(url)
  }
  

  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  public user: {} = {}
  public loading: boolean = false;
  public httpOptions= {headers: new HttpHeaders({'Content-Type':'application/json'})};
  constructor(private http: HttpClient) {


  }
  httpget(url: string): Observable<any> {
    return this.http.get(url)
  }
  httppost(url: string, body:object): Observable<any> {
    return this.http.post(url, body, this.httpOptions)
  }



}

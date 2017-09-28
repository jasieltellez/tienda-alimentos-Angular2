import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class DataService {

  constructor(private http:Http) { }

getData(){
return this.http.get(" https://tienda-alimentos.firebaseio.com/.json")
.map((response:Response)=>response.json());
}



}

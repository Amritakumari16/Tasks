import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  jsondata$: BehaviorSubject<any[]>;
  Employee_ENDPOINT = 'http://127.0.0.1:8000/employee_data';
  data: Array<any> = [];
  constructor(private httpClient: HttpClient) {
    this.jsondata$ = new BehaviorSubject<any[]>([]);
   }

  getAlldata() {
    this.httpClient.get(this.Employee_ENDPOINT).subscribe((data:any) => {
      this.data = data
      console.log('Data',data)
      this.jsondata$.next(this.data);
      console.log('JsonData',this.jsondata$)
    })
      
    }

  postJsonData(fileData:any){

    console.log('fileData',fileData)
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  };
  


    this.httpClient.post(this.Employee_ENDPOINT,fileData,httpOptions).subscribe((data:any) => {
      this.data = data
      console.log('PostedData',data)
      this.jsondata$.next(this.data);
      console.log('PostedJsonData',this.jsondata$)
    })

  }
}

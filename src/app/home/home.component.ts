import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { saveAs } from 'file-saver';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { jsonValidator } from './json.validator';

export interface Element {
  first_name: string;
  last_name: string;
  job_title: string;
  designation: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  fileData: any;
  public dataSource: MatTableDataSource<Element>;
  private serviceSubscribe: Subscription;
  form: FormGroup ;
  constructor(private dataservice: DataService) {
    this.dataSource = new MatTableDataSource<Element>();
  }
  displayedColumns = ['first_name', 'last_name', 'job_title', 'designation'];

  ngOnInit(): void {
    this.dataservice.getAlldata();
    this.serviceSubscribe = this.dataservice.jsondata$.subscribe(res => {
      console.log('Res', res, this.dataSource)
      this.dataSource.data = res;

    })
    this.form = new FormGroup({
      configJson: new FormControl(Validators.compose([Validators.required, jsonValidator]))
    });
  }
  // loadJsonConfiguration() {
  //   const config = JSON.parse(this.form.get('configJson').value  );
  // }
  selectFile(event: any) {
    this.fileData = event.target.files[0];
    console.log('File', this.fileData)

    if (
      this.fileData.type == 'application/json'
    ) {

           this.dataservice.postJsonData(this.fileData)

      // const fileReader = new FileReader();
      
      // fileReader.readAsText(this.fileData, "UTF-8");
      // fileReader.onload = () => {
      //   const fileExtractedData = JSON.parse(fileReader.result as string)
      //   this.dataservice.postJsonData(JSON.stringify(fileExtractedData))
      // }
      // fileReader.onerror = (error) => {
      //   console.log(error);
      // }



    } else {
      alert('file type should be  JSON');
      return;
    }
  }
  ngOnDestroy(): void {
    this.serviceSubscribe.unsubscribe();
  }

}

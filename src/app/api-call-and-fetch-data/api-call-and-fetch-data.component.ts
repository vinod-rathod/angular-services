import { Component } from '@angular/core';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-api-call-and-fetch-data',
  templateUrl: './api-call-and-fetch-data.component.html',
  styleUrls: ['./api-call-and-fetch-data.component.css']
})
export class ApiCallAndFetchDataComponent {
/**
 *
 */
finalData:any;
constructor(private data:ApicallService) {
  this.data.getData().subscribe(Response =>{
   this.finalData=Response;
    
  })

}
}

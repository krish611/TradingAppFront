import { DataModel } from './../entities/dataModel.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class DataModelService {
  private baseURL = environment.apiUrl;
  private listUrl = this.baseURL ;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) { }


  list() {
    return this.httpClient
      .get(this.listUrl, this.httpOptions);
  }

  getFakeData() {
    return this.httpClient.get('/assets/data.json')
      .toPromise()
      .then(res => <any>res)
      .then(res => <DataModel[]>res?.data)
      .then(data => { return data; });
  }

}
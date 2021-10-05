import { DataModelService } from './../../services/dataModel.service';
import { DataModel } from './../../entities/dataModel.interface';
import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-trading-data-view',
  templateUrl: './trading-data-view.component.html',
  styleUrls: ['./trading-data-view.component.css'],
  providers: [DataModelService]
})
export class TradingDataViewComponent implements OnInit {
  wrappedData : any;
  dataList : DataModel[] = [];
  showLoadMore = true;
  constructor(private dataService : DataModelService) { }

  ngOnInit(): void {
    // let dataList:any;
    // this.dataService.getFakeData().then(list => {
    //   this.wrappedData = list;
    //   dataList = [...list]; 
    //   this.dataList = dataList.splice(0,3);
    //   console.log(this.dataList);
    // });

    let dataList:any;
    this.dataService.list().subscribe(list => {
      this.wrappedData = <DataModel[]>list;
      dataList =  <DataModel[]>list;
      dataList = [...dataList]; 
      this.dataList = dataList.splice(0,3);
      //console.log(this.dataList);
    });
  }

  loadMore(){
    this.dataList = [...this.wrappedData];
    this.showLoadMore = false;
  }

  customSort(event: SortEvent) {
    event.data.sort((data1:any, data2:any) => {
        let value1 = data1[event.field];
        let value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string'){
          value1 = Number(value1.substr(value1.indexOf('-')));
          value2 = Number(value2.substr(value2.indexOf('-')));
          result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
        }
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

        return (event.order * result);
    });
}
}

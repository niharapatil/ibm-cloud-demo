import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../providers/CommonServiceProvider';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'viewpost-cmp',
    templateUrl: 'viewpost.component.html'
})

export class ViewPostComponent implements OnInit {
    getdata: any = [];

    constructor(public apiService: CommonService) {

    }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        console.log("got in");
        this.apiService.getAllData()
            .then(data => {
                this.getdata.push(data);
                console.log("get data", this.getdata);
                // for (var q = 0; q < data.length; q++) {
                //     console.log("check date "+data[q].updatedTimeStamp);
                //     let dateFormat = data[q].updatedTimeStamp;
                //    }
            });

    }

}

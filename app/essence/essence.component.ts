import {Component, OnInit} from '@angular/core';
import {BsTableComponent} from '../components/bstable/bstable.component';
import {LocalStorage} from '../service/storage.service';

@Component({
    selector: 'essence',
    templateUrl: '/app/template/essence.component.html',
    directives: [BsTableComponent],
    providers:[LocalStorage]
})

export class EssenceComponent implements OnInit {
    title:string;
    columns: Array<any>;
    rows: Array<any>;

    _data: any;

    constructor(private localStorage: LocalStorage) {}

    ngOnInit(): void {
        this.getData();
    }

    getData(){
        this._data = this.localStorage.get(this.getTableName());
        this.changeRows();
    }

    changeRows() {
        this.rows = this._data;
    }

    getTableName(){
        return '';
    }
}


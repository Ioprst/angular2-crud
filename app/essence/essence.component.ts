import {Component} from '@angular/core';
import {BsTableComponent} from '../components/bstable/bstable.component';

@Component({
    selector: 'essence',
    templateUrl: '/app/template/essence.component.html',
    directives: [BsTableComponent]
})

export class EssenceComponent {
    title = "Essence";
    columns = [
        {
            key: 'name',
            label: 'Name'
        }
    ];
    constructor() {
    }
}


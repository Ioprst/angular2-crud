import {Component, Input} from '@angular/core';

@Component({
    selector: 'bs-table',
    templateUrl: '/app/components/bstable/bstable.component.html',
})

export class BsTableComponent {
    @Input() public columns = [];
    @Input() public data = [];
    constructor() {
    }
}


import {Component} from '@angular/core';
import {EssenceComponent} from './essence/essence.component';

@Component({
    selector: 'my-app',
    templateUrl: '/app/template/app.component.html',
    directives:[EssenceComponent]
})

export class AppComponent {
    constructor() {
    }
}


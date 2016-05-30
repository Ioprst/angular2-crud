import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {CompanyComponent} from './essence/company/company.component'

@Component({
    selector: 'my-app',
    templateUrl: '/app/template/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
    ]
})
@RouteConfig([
    {
        path: '/company',
        name: 'Company',
        component: CompanyComponent,
        useAsDefault: true
    },
])
export class AppComponent {
    constructor() {
    }
}


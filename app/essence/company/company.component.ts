import {EssenceComponent} from '../essence.component';

export class CompanyComponent extends EssenceComponent {
    title = "Company";
    columns = [
        {
            label:'ID',
            key: 'id'
        },
        {
            label: 'Name',
            key: 'name'
        },
        {
            label: 'Description',
            key: 'description'
        }
    ]

    getTableName() {
        return 'Company';
    }

    ngOnInit(): void {
        super.ngOnInit();
    }

}


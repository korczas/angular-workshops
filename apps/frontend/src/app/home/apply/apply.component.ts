import { ChangeDetectionStrategy, Component } from '@angular/core';
import { species } from '../../consts/species.const';
import { VisaApplication } from '../../consts/visaApplication.interface';

@Component({
    selector: 'app-apply',
    templateUrl: './apply.component.html',
    styleUrl: './apply.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplyComponent {
    species = Object.entries(species).map(([value, label]) => ({ label, value }));

    initialValues: VisaApplication | null = {
        fullName: 'John Doe',
        email: 'asdf@aa.aa',
        arrivalDate: new Date(),
        distance: 100,
        extraInfo: 'Some extra info',
        destination: 'USA',
        privacyPolicy: true,
        species: 'human',
    };

    onSubmit(values: VisaApplication) {
        console.log(values);
    }
}

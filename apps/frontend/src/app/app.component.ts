import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as yup from 'yup';

yup.setLocale({
    mixed: {
        required: 'This field is required',
        notType: 'This field is required',
    },
});

@Component({
    standalone: true,
    imports: [RouterModule],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'frontend';
}

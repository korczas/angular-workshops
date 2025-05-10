import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, Calendar } from 'primeng/calendar';

@Component({
    selector: 'ds-form-datepicker',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, CalendarModule],
    templateUrl: './form-datepicker.component.html',
    styleUrl: './form-datepicker.component.scss',
})
export class FormDatepickerComponent {
    @Input({ required: true })
    label!: string;

    @Input({ required: true })
    control!: FormControl;

    @Input({ required: true, transform: booleanAttribute })
    hasError!: boolean;

    @Input()
    errorMessage?: string;

    @Input()
    placeholder?: string = '';

    @Input()
    helperText?: string;

    @Input({ transform: booleanAttribute })
    showClear?: boolean = false;

    @Input()
    selectionMode?: Calendar['selectionMode'] = 'single';

    @Input()
    minDate?: Calendar['minDate'] = null;

    @Input()
    maxDate?: Calendar['maxDate'] = null;
}

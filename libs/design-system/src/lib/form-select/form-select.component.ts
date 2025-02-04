import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
    selector: 'ds-form-select',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, DropdownModule],
    templateUrl: './form-select.component.html',
    styleUrl: './form-select.component.scss',
})
export class FormSelectComponent {
    @Input({ required: true })
    label!: string;

    @Input({ required: true })
    control!: FormControl;

    @Input({ required: true, transform: booleanAttribute })
    hasError!: boolean;

    @Input()
    errorMessage?: string;

    @Input({ required: true })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options!: any[];

    @Input()
    labelKey? = 'label';

    @Input()
    valueKey? = 'value';

    @Input()
    placeholder?: string = '';

    @Input()
    helperText?: string;
}

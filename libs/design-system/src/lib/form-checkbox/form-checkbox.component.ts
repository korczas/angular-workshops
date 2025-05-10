import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
    selector: 'ds-form-checkbox',
    standalone: true,
    imports: [CheckboxModule, CommonModule, ReactiveFormsModule],
    templateUrl: './form-checkbox.component.html',
    styleUrl: './form-checkbox.component.scss',
})
export class FormCheckboxComponent {
    @Input({ required: true })
    label!: string;

    @Input({ required: true })
    control!: FormControl;

    @Input({ required: true, transform: booleanAttribute })
    hasError!: boolean;

    @Input()
    errorMessage?: string;
}

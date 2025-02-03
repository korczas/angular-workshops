import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
    selector: 'ds-form-textarea',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, InputTextareaModule],
    templateUrl: './form-textarea.component.html',
    styleUrl: './form-textarea.component.scss',
})
export class FormTextareaComponent {
    @Input({ required: true })
    label!: string;

    @Input({ required: true })
    control!: FormControl;

    @Input({ required: true, transform: booleanAttribute })
    hasError!: boolean;

    @Input()
    rows?: number = 5;

    @Input()
    placeholder?: string = '';

    @Input()
    helperText?: string;

    @Input()
    errorMessage?: string;
}

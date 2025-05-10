import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, booleanAttribute } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'ds-form-input',
    standalone: true,
    imports: [InputTextModule, CommonModule, ReactiveFormsModule],
    templateUrl: './form-input.component.html',
    styleUrl: './form-input.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent {
    @Input({ required: true })
    label!: string;

    @Input({ required: true })
    control!: FormControl;

    @Input({ required: true, transform: booleanAttribute })
    hasError!: boolean;

    @Input()
    type: 'text' | 'number' | 'email' | 'tel' = 'text';

    @Input()
    placeholder?: string = '';

    @Input()
    helperText?: string;

    @Input()
    errorMessage?: string;
}

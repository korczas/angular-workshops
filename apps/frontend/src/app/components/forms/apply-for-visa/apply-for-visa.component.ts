import {
    FormCheckboxComponent,
    FormDatepickerComponent,
    FormInputComponent,
    FormSelectComponent,
    FormTextareaComponent,
} from '@angular-workshops/design-system';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

import { VisaApplication } from '../../../consts/visaApplication.interface';
import { validateYupSchema } from '../../../utils/validate-yup-schema';
import { applyForVisaValidationSchema } from './apply-for-visa.validation';

@Component({
    selector: 'app-apply-for-visa',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormInputComponent,
        FormSelectComponent,
        FormDatepickerComponent,
        FormCheckboxComponent,
        ButtonModule,
        FormTextareaComponent,
    ],
    templateUrl: './apply-for-visa.component.html',
    styleUrl: './apply-for-visa.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplyForVisaComponent implements OnInit {
    @Input({ required: true }) species: { value: string; label: string }[] = [];
    @Input() initialValues: VisaApplication | null = null;

    @Output() handleSubmit = new EventEmitter<VisaApplication>();

    applyForVisaForm!: FormGroup;
    isEdit = false;

    constructor(private fb: FormBuilder) {
        this.applyForVisaForm = this.fb.group(
            {
                fullName: '',
                email: '',
                species: '',
                arrivalDate: null,
                distance: null,
                extraInfo: '',
                destination: '',
                privacyPolicy: false,
            },
            { validators: validateYupSchema(applyForVisaValidationSchema) },
        );
    }

    ngOnInit() {
        if (this.initialValues) {
            this.applyForVisaForm.patchValue(this.initialValues);
            this.isEdit = true;
        }
    }

    getControl(name: string): FormControl {
        return this.applyForVisaForm.get(name) as FormControl;
    }

    onSubmit() {
        this.applyForVisaForm.markAllAsTouched();
        this.applyForVisaForm.updateValueAndValidity();

        if (this.applyForVisaForm.valid) {
            this.handleSubmit.emit(this.applyForVisaForm.value);
        }
    }

    hasError(controlName: string) {
        const control = this.getControl(controlName);
        return (control?.invalid || !control?.valid) && control?.touched;
    }

    getErrorMessage(controlName: string) {
        const control = this.getControl(controlName);
        if (control?.pristine && !control.touched) return;
        return this.applyForVisaForm?.errors?.[controlName];
    }
}

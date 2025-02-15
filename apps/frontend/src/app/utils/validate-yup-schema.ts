import * as yup from 'yup';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validateYupSchema<T extends yup.AnyObject>(
    schema: yup.ObjectSchema<T>,
    context = {},
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!(control instanceof FormGroup)) return null;

        try {
            schema.validateSync(control.value, { abortEarly: false, context });
            return null;
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                const errorObjects = error.inner;
                let filteredErrors: yup.ValidationError[] = [];
                errorObjects.forEach((obj: yup.ValidationError) => {
                    const isExisting = filteredErrors.some((x) => obj.path === x.path);
                    if (!isExisting) return filteredErrors.push(obj);

                    filteredErrors = filteredErrors.map((item) => {
                        if (item.path === obj.path) item.errors.push(obj.message);
                        return item;
                    });
                    return;
                });
                const errors: ValidationErrors = {};
                filteredErrors.forEach((item: yup.ValidationError) => {
                    if (!item.path) return;
                    const formControl = control.get(item.path);
                    if (!formControl) return;
                    formControl.setErrors({ errors: item.errors[0] });
                    errors[item.path] = item.errors[0];
                });
                return errors;
            }
            throw error; // Re-throw the error if it is not a Yup.ValidationError
        }
    };
}

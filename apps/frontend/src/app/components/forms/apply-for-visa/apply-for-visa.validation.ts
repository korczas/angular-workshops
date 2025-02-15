import * as yup from 'yup';
import { VisaApplication } from '../../../consts/visaApplication.interface';
import { Species, species } from '../../../consts/species.const';

export const applyForVisaValidationSchema: yup.ObjectSchema<VisaApplication> = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    species: yup.mixed<Species>().oneOf(Object.values(species)).required(),
    arrivalDate: yup.date().required().min(new Date()),
    distance: yup.number().min(0).required(),
    extraInfo: yup.string(),
    destination: yup.string().required(),
    privacyPolicy: yup.boolean().oneOf([true], 'Privacy policy must be accepted').required(),
});

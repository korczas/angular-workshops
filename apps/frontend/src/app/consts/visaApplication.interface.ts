import { Species } from './species.const';

export interface VisaApplication {
    fullName: string;
    email: string;
    species: Species;
    arrivalDate: Date;
    distance: number;
    extraInfo?: string;
    destination: string;
    privacyPolicy: boolean;
}

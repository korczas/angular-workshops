import { Exclude, Transform } from 'class-transformer';
import { Application } from '../entities/application.entity';

export class ApplicationResponseV1Dto {
    id: number;
    fullName: string;
    email: string;

    @Transform(({ obj }) => (obj.species ? obj.species.name : null))
    species: string;

    @Transform(({ obj }) => (obj.destinationPlanet ? obj.destinationPlanet.name : null))
    destinationPlanet: string;

    arrivalDate: Date;
    extraInfo: string;
    acceptedPrivacyPolicy: boolean;
    status: string;

    @Exclude()
    createdAt: Date;

    @Exclude()
    updatedAt: Date;

    constructor(partial: Partial<Application>) {
        Object.assign(this, partial);
    }
}

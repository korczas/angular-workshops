import {
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

import { Species } from '../../species/entities/species.entity';
import { Planet } from '../../planet/entities/planet.entity';

export const ApplicationStatus = {
    APPROVED: 'approved',
    REJECTED: 'rejected',
    PENDING: 'pending',
} as const;

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

@Entity()
export class Application {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    email: string;

    @ManyToOne(() => Species, (species) => species.applications)
    species: Species;

    @ManyToOne(() => Planet, (planet) => planet.applications)
    destinationPlanet: Planet;

    @Column()
    arrivalDate: Date;

    @Column({ type: 'text' })
    extraInfo: string;

    @Column()
    acceptedPrivacyPolicy: boolean;

    @Column({ type: 'simple-enum', enum: ApplicationStatus })
    status: ApplicationStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

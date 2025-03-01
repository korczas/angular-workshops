import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { Species } from '../../species/entities/species.entity';
import { Application } from '../../application/entities/application.entity';

@Entity()
export class Planet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Species, (species) => species.planets)
    @JoinColumn({ name: 'species_id' })
    controlledBy: Species;

    @OneToMany(() => Application, (application) => application.destinationPlanet)
    applications: Application[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Planet } from '../../planet/entities/planet.entity';
import { Application } from '../../application/entities/application.entity';

@Entity()
export class Species {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Planet, (planet) => planet.controlledBy)
    planets: Planet[];

    @OneToMany(() => Application, (application) => application.species)
    applications: Application[];
}

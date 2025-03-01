import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application, ApplicationStatus } from './entities/application.entity';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';

@Injectable()
export class ApplicationService {
    constructor(
        @InjectRepository(Application)
        private applicationRepository: Repository<Application>,
    ) {}

    async create(applicationDto: CreateApplicationDto) {
        const newApplication = this.applicationRepository.create({
            ...applicationDto,
            status: ApplicationStatus.PENDING,
        });

        return this.applicationRepository.save(newApplication);
    }

    async findAll() {
        return this.applicationRepository.find({ relations: ['species', 'destinationPlanet'] });
    }

    async findOne(id: number) {
        const application = await this.applicationRepository.findOne({
            where: { id },
            relations: ['species', 'destinationPlanet'],
        });

        if (!application) {
            throw new NotFoundException(`Application with id ${id} not found`);
        }

        return application;
    }

    async update(id: number, updateApplicationDto: UpdateApplicationDto) {
        return this.applicationRepository.save({ id, ...updateApplicationDto });
    }

    async remove(id: number) {
        return this.applicationRepository.delete(id);
    }
}

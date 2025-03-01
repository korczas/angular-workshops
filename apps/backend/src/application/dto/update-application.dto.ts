import { PartialType } from '@nestjs/mapped-types';
import { CreateApplicationDto } from './create-application.dto';
import { ApplicationStatus } from '../entities/application.entity';
import { IsString, IsOptional } from 'class-validator';

export class UpdateApplicationDto extends PartialType(CreateApplicationDto) {
    @IsString()
    @IsOptional()
    status?: ApplicationStatus;
}

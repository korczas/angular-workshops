import { Type } from 'class-transformer';
import { IsString, IsEmail, IsDate, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class CreateApplicationDto {
    @IsString()
    fullName: string;

    @IsEmail()
    email: string;

    @IsNumber()
    speciesId: number;

    @IsNumber()
    destinationPlanetId: number;

    @IsDate()
    @Type(() => Date)
    arrivalDate: Date;

    @IsString()
    @IsOptional()
    extraInfo: string;

    @IsBoolean()
    acceptedPrivacyPolicy: boolean;
}

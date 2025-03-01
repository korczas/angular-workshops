import { Module } from '@nestjs/common';
import { PlanetService } from './planet.service';
import { PlanetController } from './planet.controller';
import { Planet } from './entities/planet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Planet])],
    controllers: [PlanetController],
    providers: [PlanetService],
})
export class PlanetModule {}

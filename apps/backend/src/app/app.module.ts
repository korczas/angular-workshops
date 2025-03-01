import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from '../application/entities/application.entity';
import { Planet } from '../planet/entities/planet.entity';
import { Species } from '../species/entities/species.entity';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationModule } from '../application/application.module';
import { PlanetModule } from '../planet/planet.module';
import { SpeciesModule } from '../species/species.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'database.sqlite',
            entities: [Application, Planet, Species],
            synchronize: true,
        }),
        ApplicationModule,
        PlanetModule,
        SpeciesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

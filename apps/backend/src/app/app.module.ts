import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Application } from '../application/entities/application.entity';
import { Planet } from '../planet/entities/planet.entity';
import { Species } from '../species/entities/species.entity';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'database.sqlite',
            entities: [Application, Planet, Species],
            synchronize: true,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

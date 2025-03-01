import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseInterceptors,
    ClassSerializerInterceptor,
    ParseIntPipe,
    NotFoundException,
} from '@nestjs/common';
import { ApplicationService } from './application.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { ApplicationResponseV1Dto } from './dto/application-response-v1.dto';

@Controller('application')
@UseInterceptors(ClassSerializerInterceptor)
export class ApplicationController {
    constructor(private readonly applicationService: ApplicationService) {}

    @Post()
    async create(@Body() createApplicationDto: CreateApplicationDto) {
        const application = await this.applicationService.create(createApplicationDto);
        return new ApplicationResponseV1Dto(application);
    }

    @Get()
    async findAll() {
        const applications = await this.applicationService.findAll();
        return applications.map((app) => new ApplicationResponseV1Dto(app));
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const application = await this.applicationService.findOne(id);

        return new ApplicationResponseV1Dto(application);
    }

    @Patch(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateApplicationDto: UpdateApplicationDto,
    ) {
        const application = await this.applicationService.update(id, updateApplicationDto);
        if (!application) {
            throw new NotFoundException(`Application with id ${id} not found`);
        }
        return new ApplicationResponseV1Dto(application);
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
        const result = await this.applicationService.remove(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Application with id ${id} not found`);
        }
        return { message: `Application with id ${id} successfully deleted` };
    }
}

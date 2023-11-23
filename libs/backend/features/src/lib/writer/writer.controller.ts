import { Controller } from '@nestjs/common';
import { WriterService } from '../writer.service';
import { Get, Param, Post, Body } from '@nestjs/common';
import { IWriter } from '@nx-emma-indiv/shared/api';
import { CreateWriterDto } from '@nx-emma-indiv/backend/dto';

@Controller('writer')
export class WriterController {
    constructor(private writerService: WriterService) {}

    @Get('')
    getAll(): IWriter[] {
        return this.writerService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string): IWriter {
        return this.writerService.getOne(id);
    }

    @Post('')
    create(@Body() data: CreateWriterDto): IWriter {
        return this.writerService.create(data);
    }
}

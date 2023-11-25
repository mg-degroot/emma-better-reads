import { Controller, Get, Param, Post, Delete, Put, Body } from '@nestjs/common';
import { WriterService } from '../writer.service';
import { IWriter } from '@nx-emma-indiv/shared/api';

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
    create(@Body() writer: IWriter): IWriter {
      console.log('Received writer:', writer);
      return this.writerService.create(writer);
    }

    @Put('/:id')
    edit(@Param('id') id: string, @Body() writer: IWriter): IWriter {
      return this.writerService.update(writer);
    }

    @Delete('/:id')
    delete(@Param('id') id: string): void {
      this.writerService.deleteWriter(id);
    }
}

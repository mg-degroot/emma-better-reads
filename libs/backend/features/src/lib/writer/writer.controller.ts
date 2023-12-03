import { Controller, Get, Param, Post, Delete, Put, Body } from '@nestjs/common';
import { WriterService } from '../writer.service';
import { IWriter } from '@nx-emma-indiv/shared/api';
import { CreateWriterDto, UpdateWriterDto } from '@nx-emma-indiv/backend/dto';


@Controller('writer')
export class WriterController {
    constructor(private writerService: WriterService) {}

    @Get('')
    async getAll(): Promise<IWriter[]> {
        return await this.writerService.findAll();
    }

    @Get(':_id')
    async getOne(@Param('_id') _id: string): Promise<IWriter | null> {
        return await this.writerService.findOne(_id);
    }

    @Post('')
    async create(@Body() createWriterDto: CreateWriterDto): Promise<IWriter> {
        const {...writerWithoutId } = createWriterDto;
        return await this.writerService.create(writerWithoutId);
    }

    @Put(':id')
    async update(@Param('id') writerId: string, @Body() updateWriterDto: UpdateWriterDto) {
      const updatedWriter = await this.writerService.update(writerId, updateWriterDto);
      return { message: 'writer updated successfully', writer: updatedWriter };
    }
    

    @Delete('/:_id')
    async delete(@Param('_id') _id: string): Promise<void> {
        await this.writerService.deleteWriter(_id);
    }
}

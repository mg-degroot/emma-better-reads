import { Controller } from '@nestjs/common';
import { BookService } from '../book.service';
import { Get, Param, Post, Body } from '@nestjs/common';
import { IBook } from '@nx-emma-indiv/shared/api';
import { CreateBookDto } from '@nx-emma-indiv/backend/dto';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) {}

    @Get('')
    getAll(): IBook[] {
        return this.bookService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string): IBook {
        return this.bookService.getOne(id);
    }

    @Post('')
    create(@Body() data: CreateBookDto): IBook {
        return this.bookService.create(data);
    }
}

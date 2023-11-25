import { Controller, Get, Param, Post, Delete, Put, Body } from '@nestjs/common';
import { BookService } from '../book.service';
import { IBook } from '@nx-emma-indiv/shared/api';

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
    create(@Body() book: IBook): IBook {
      return this.bookService.create(book);
    }

    @Put('/:id')
    edit(@Param('id') id: string, @Body() book: IBook): IBook {
      return this.bookService.update(book);
    }

    @Delete('/:id')
    delete(@Param('id') id: string): void {
      this.bookService.deleteBook(id);
    }
}

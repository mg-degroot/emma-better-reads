import { Controller, Get, Param, Post, Delete, Put, Body } from '@nestjs/common';
import { BookService } from '../book.service';
import { IBook, IUser, Leesstatus } from '@nx-emma-indiv/shared/api';
import { CreateBookDto, UpdateBookDto } from '@nx-emma-indiv/backend/dto';


@Controller('book')
export class BookController {
    constructor(private bookService: BookService) {}

    @Get('')
    async getAll(): Promise<IBook[]> {
        return await this.bookService.findAll();
    }

    @Get(':_id')
    async getOne(@Param('_id') _id: string): Promise<IBook | null> {
        return await this.bookService.findOne(_id);
    }

    @Post('')
    async create(@Body() createBookDto: CreateBookDto): Promise<IBook> {
      const createdBook = await this.bookService.createBook(createBookDto);
      return createdBook;
    }
    
    @Put(':id')
    async update(@Param('id') bookId: string, @Body() updateBookDto: UpdateBookDto) {
      const updatedBook = await this.bookService.update(bookId, updateBookDto);
      return { message: 'book updated successfully', book: updatedBook };
    }
    
    @Delete('/:_id')
    async delete(@Param('_id') _id: string): Promise<void> {
        await this.bookService.deleteBook(_id);
    }

    @Post('/:_id/status/:userId')
    async addOrUpdateLeesstatus(@Param('userId') userId: string, @Param('_id') bookId: string, @Body('leesstatus') leesstatus: Leesstatus): Promise<IUser> {
      return this.bookService.addOrUpdateLeesstatus(userId, bookId, leesstatus);
    }
    
    @Put('/:_id/status/:userId')
    async updateLeesstatus(@Param('userId') userId: string, @Param('_id') bookId: string, @Body('leesstatus') leesstatus: Leesstatus): Promise<IUser> {
      return this.bookService.updateLeesstatus(userId, bookId, leesstatus);
    }
    
    @Delete('/:_id/status/:userId')
    async removeBookFromBookList(@Param('userId') userId: string, @Param('_id') bookId: string): Promise<IUser> {
      return this.bookService.removeBookFromBookList(userId, bookId);
    }
}

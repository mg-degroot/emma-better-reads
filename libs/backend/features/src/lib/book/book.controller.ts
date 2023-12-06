import { Controller, Get, Param, Post, Delete, Put, Body, Patch } from '@nestjs/common';
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

    // Add a new book to the boekenlijst
    @Post('/:boekId/:userId/booklist')
    async addBookBooklist(@Param('userId') userId: string, @Body() { boekId, leesstatus }: { boekId: IBook; leesstatus: Leesstatus },): Promise<void> {
        // Assuming boekId is of type IBook, you can directly use it
        const bookId: IBook = boekId;

        // Add or update the leesstatus in the user's boekenlijst
        await this.bookService.addBookBooklist(userId, bookId, leesstatus);
    }

    // Update leesstatus of an existing book in the boekenlijst
    @Put('/:boekId/:userId/booklist')
    async updateLeesstatus(@Param('userId') userId: string, @Body() { boekId, leesstatus }: { boekId: string; leesstatus: Leesstatus },): Promise<void> {

        // Call the service method to update the leesstatus of the book in boekenlijst
        await this.bookService.updateLeesstatus(userId, boekId, leesstatus);
    }
    
    // Remove a book from the boekenlijst
    @Delete('/:boekId/:userId/booklist')
    async removeBookBookList(@Param('boekId') boekId: string, @Param('userId') userId: string,): Promise<void> {
      await this.bookService.removeBookBookList(userId, boekId);
    }
}

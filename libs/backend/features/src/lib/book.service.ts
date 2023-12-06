import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book as BookModel, BookDocument } from './book/book.schema';
import { User as UserModel, UserDocument } from './user/user.schema';
import { IBook, IUser, Leesstatus } from '@nx-emma-indiv/shared/api';
// import { Meal, MealDocument } from '@avans-nx-workshop/backend/features';
import { CreateBookDto, UpdateBookDto } from '@nx-emma-indiv/backend/dto';
import { WriterService } from './writer.service';

@Injectable()
export class BookService {
    private readonly logger: Logger = new Logger(BookService.name);

    constructor(
        @InjectModel(BookModel.name) private bookModel: Model<BookDocument>,
        @InjectModel(UserModel.name) private userModel: Model<UserDocument>,
        private readonly writerService: WriterService
    ) {}

    async findAll(): Promise<IBook[]> {
        this.logger.log(`Finding all items with full writer data`);
        
        const items = await this.bookModel.find().populate('schrijver');
        
        return items;
      }
      

      async findOne(_id: string): Promise<IBook | null> {
        this.logger.log(`finding book with id ${_id}`);
    
        // Check if id is null
        if (_id === null || _id === "null") {
            this.logger.debug('ID is null or "null"');
            return null;
        }
        // Use populate to fetch the writer details along with the book
        const item = await this.bookModel.findOne({ _id: _id }).populate('schrijver').exec();
    
        if (!item) {
            this.logger.debug('Item not found');
        }
    
        return item;
    }
    

    async createBook(bookDto: CreateBookDto): Promise<IBook> {
        const { _id, schrijver, ...bookWithoutWriter } = bookDto;
      
        // Voeg de schrijver expliciet toe aan het boek
        const bookData = {
          ...bookWithoutWriter,
          schrijver: schrijver, // Hier de schrijver direct toevoegen
        };
      
        const createdBook = await this.bookModel.create(bookData);
        return createdBook;
      }
      
      
    async update(bookId: string, updateBookDto: UpdateBookDto): Promise<IBook> {
        const existingBook = await this.bookModel.findById(bookId).exec();
      
        if (!existingBook) {
          throw new NotFoundException(`Book with id ${bookId} not found`);
        }
      
        // Update book properties
        Object.assign(existingBook, updateBookDto);
      
        // Save the updated book
        const updatedBook = await existingBook.save();
      
        return updatedBook;
    }
    

    async deleteBook(_id: string): Promise<void> {
      this.logger.log(`Deleting Book with id ${_id}`);
      const deletedItem = await this.bookModel.findByIdAndDelete(_id).exec();

      if (!deletedItem) {
          this.logger.debug('Book not found for deletion');
          throw new NotFoundException(`Book with _id ${_id} not found`);
      }

      this.logger.log(`Book deleted successfully`);
  }

    // Toegevoegd voor boekenlijst
    //   async addOrUpdateLeesstatus(userId: string, bookId: string, leesstatus: Leesstatus): Promise<IUser> {
    //     const user = await this.userModel.findById(userId).exec();
      
    //     if (!user) {
    //       throw new NotFoundException(`User with id ${userId} not found`);
    //     }
      
    //     const bookIndex = user.boekenlijst.findIndex((book) => book.boekId === bookId);
      
    //     // If the book is not in the array, add it
    //     if (bookIndex === -1) {
    //       const newBook = { boekId: bookId, leesstatus: leesstatus };
    //       user.boekenlijst.push(newBook);
    //     } else {
    //       // If the book is already in the array, update its leesstatus
    //       user.boekenlijst[bookIndex].leesstatus = leesstatus;
    //     }
      
    //     const updatedUser = await user.save();
      
    //     return updatedUser;
    // }

    // Toegevoegd voor boekenlijst
    async addOrUpdateLeesstatus(userId: string, bookId: string, leesstatus: Leesstatus): Promise<IUser> {
      const user = await this.userModel.findById(userId).exec();
      if (!user) {
        throw new NotFoundException(`User with id ${userId} not found`);
      }
    
      const newBook = { boekId: bookId, leesstatus: leesstatus };
      user.boekenlijst.push(newBook);
      const updatedUser = await user.save();
    
      return updatedUser;
    }
    
    async updateLeesstatus(userId: string, bookId: string, leesstatus: Leesstatus): Promise<IUser> {
      const user = await this.userModel.findById(userId).exec();
      if (!user) {
        throw new NotFoundException(`User with id ${userId} not found`);
      }
    
      const bookIndex = user.boekenlijst.findIndex((book) => book.boekId === bookId);
       
      // If the book is already in the array, update its leesstatus
      user.boekenlijst[bookIndex].leesstatus = leesstatus;
    
      const updatedUser = await user.save();
      return updatedUser;
    }

    //Verwijderen uit boekenlijst
    async removeBookFromBookList(userId: string, bookId: string): Promise<IUser> {
      const user = await this.userModel.findById(userId).exec();
      
        if (!user) {
          throw new NotFoundException(`User with id ${userId} not found`);
        }
    
      user.boekenlijst = user.boekenlijst.filter((book) => book.boekId !== bookId);
      const updatedUser = await user.save();
      return updatedUser;
    }
}
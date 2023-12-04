import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from '../book.service';
import { MongooseModule } from '@nestjs/mongoose';

import { Book, BookSchema } from './book.schema';
import { Writer, WriterSchema } from '../writer/writer.schema';
import { WriterService } from '../writer.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Book.name, schema: BookSchema },
      { name: Writer.name, schema: WriterSchema },
    ]),
  ],
  controllers: [BookController],
  providers: [BookService, WriterService],
  exports: [BookService],
})
export class BackendFeaturesBookModule {}

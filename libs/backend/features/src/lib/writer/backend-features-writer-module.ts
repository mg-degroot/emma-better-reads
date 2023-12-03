import { Module } from '@nestjs/common';
import { WriterController } from './writer.controller';
import { WriterService } from '../writer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Writer, WriterSchema } from './writer.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Writer.name, schema: WriterSchema }])],
controllers: [WriterController],
  providers: [WriterService],
  exports: [WriterService],
})
export class BackendFeaturesWriterModule {}

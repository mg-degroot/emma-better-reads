import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from '../user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { Book, BookSchema } from '../book/book.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: Book.name, schema: BookSchema }, // Voeg dit toe als Book het model is dat je refereert
        ]),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class BackendFeaturesUserModule {}
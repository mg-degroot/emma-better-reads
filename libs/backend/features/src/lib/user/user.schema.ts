import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IUser } from '@nx-emma-indiv/shared/api';

export type UserDocument = User & Document;

@Schema()
export class User implements IUser {
    _id!: string;

    @Prop({
        required: true,
        unique: true
    })
    naam!: string;


    @Prop({
        required: true,
        type: String
    })
    email = '';

    @Prop({
        required: true,
        unique: true
    })
    geboortedatum!: Date;

    @Prop({
        required: true,
        unique: true
    })
    straatnaam!: string;

    @Prop({
        required: true,
        unique: true
    })
    huisnummer!: number;

    @Prop({
        required: true,
        unique: true
    })
    stad!: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
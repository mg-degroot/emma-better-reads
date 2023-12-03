import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IUser } from '@nx-emma-indiv/shared/api';

export type UserDocument = User & Document;

@Schema()
export class User implements IUser {
    _id!: string;

    @Prop({
        required: true
    })
    naam!: string;


    @Prop({
        required: true,
        unique: true
    })
    email!: string;

    @Prop({
        required: true
    })
    geboortedatum!: Date;

    @Prop({
        required: true
    })
    straatnaam!: string;

    @Prop({
        required: true
    })
    huisnummer!: number;

    @Prop({
        required: true
    })
    stad!: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
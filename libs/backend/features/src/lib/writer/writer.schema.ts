import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IWriter } from '@nx-emma-indiv/shared/api';

export type WriterDocument = Writer & Document;

@Schema()
export class Writer implements IWriter {
    _id!: string;

    @Prop({
        required: true,
    })
    profielFoto!: string;

    @Prop({
        required: true,
    })
    schrijvernaam!: string;

    @Prop({
        required: true,
    })
    geboortedatum!: Date;

    @Prop({
        required: true,
    })
    bio!: string;

    @Prop({
        required: true,
    })
    geboorteplaats!: string;

    @Prop({
        required: true,
    })
    moedertaal!: string;

}

export const WriterSchema = SchemaFactory.createForClass(Writer);
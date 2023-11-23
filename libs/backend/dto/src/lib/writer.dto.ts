import {
    IsNotEmpty,
    IsString,
    IsBoolean,
    IsOptional,
    IsDate
} from 'class-validator';
import {
    ICreateWriter,
    IUpdateWriter,
    IUpsertWriter
} from '@nx-emma-indiv/shared/api';

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateWriterDto implements ICreateWriter {
    @IsString()
    @IsNotEmpty()
    schrijvernaam!: string;

    @IsString()
    @IsNotEmpty()
    bio!: string;

    @IsDate()
    @IsNotEmpty()
    geboortedatum!: Date;

    @IsDate()
    @IsNotEmpty()
    geboorteplaats!: string;

    @IsDate()
    @IsNotEmpty()
    moedertaal!: string;
}

export class UpsertWriterDto implements IUpsertWriter {

    @IsString()
    @IsNotEmpty()
    id!: string;

    @IsString()
    @IsNotEmpty()
    schrijvernaam!: string;

    @IsString()
    @IsNotEmpty()
    bio!: string;

    @IsDate()
    @IsNotEmpty()
    geboortedatum!: Date;

    @IsDate()
    @IsNotEmpty()
    geboorteplaats!: string;

    @IsDate()
    @IsNotEmpty()
    moedertaal!: string;
}

export class UpdateWriterDto implements IUpdateWriter {
    @IsString()
    @IsOptional()
    schrijvernaam!: string;

    @IsString()
    @IsOptional()
    geboortedatum!: Date;

    @IsBoolean()
    @IsOptional()
    completed!: boolean;
}

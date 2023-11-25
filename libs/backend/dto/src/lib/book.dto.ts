import {
    IsNotEmpty,
    IsString,
    IsBoolean,
    IsOptional,
    IsDate,
    IsNumber
} from 'class-validator';
import {
    ICreateBook,
    IUpdateBook,
    IUpsertBook,
    IWriter
} from '@nx-emma-indiv/shared/api';

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateBookDto implements ICreateBook {
    @IsString()
    @IsNotEmpty()
    titel!: string;

    @IsString()
    @IsNotEmpty()
    cover!: string;

    @IsString()
    @IsNotEmpty()
    id!: string;

    @IsDate()
    @IsNotEmpty()
    publiceerdatum!: Date;

    @IsString()
    @IsNotEmpty()
    beschrijving!: string;

    @IsNumber()
    @IsNotEmpty()
    paginas!: number;

    @IsString()
    @IsNotEmpty()
    schrijver!: IWriter;

    @IsString()
    @IsNotEmpty()
    genre!: string;

    @IsString()
    @IsNotEmpty()
    origineletaal!: string;
}

export class UpsertBookDto implements IUpsertBook {
    @IsString()
    @IsNotEmpty()
    titel!: string;

    @IsString()
    @IsNotEmpty()
    cover!: string;

    @IsString()
    @IsNotEmpty()
    id!: string;

    @IsDate()
    @IsNotEmpty()
    publiceerdatum!: Date;

    @IsString()
    @IsNotEmpty()
    beschrijving!: string;

    @IsNumber()
    @IsNotEmpty()
    paginas!: number;

    @IsString()
    @IsNotEmpty()
    schrijver!: IWriter;

    @IsString()
    @IsNotEmpty()
    genre!: string;

    @IsString()
    @IsNotEmpty()
    origineletaal!: string;
}

export class UpdateBookDto implements IUpdateBook {
    @IsString()
    @IsNotEmpty()
    titel!: string;

    @IsDate()
    @IsNotEmpty()
    publiceerdatum!: Date;

    @IsBoolean()
    @IsOptional()
    completed!: boolean;
}

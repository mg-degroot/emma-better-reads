import {
    IsNotEmpty,
    IsString,
    IsBoolean,
    IsOptional,
    IsMongoId,
    IsNumber,
    IsArray
} from 'class-validator';
import {
    ICreateUser,
    IUpdateUser,
    IUpsertUser,
    IBookList
} from '@nx-emma-indiv/shared/api';

/**
 * Use the `Pick` utility type to extract only the properties we want for
 * new to-do items
 */
export class CreateUserDto implements ICreateUser {

    @IsOptional()
    @IsString()
    _id?: string;

    @IsString()
    @IsNotEmpty()
    naam!: string;

    @IsString()
    @IsNotEmpty()
    email!: string;

    @IsNotEmpty()
    geboortedatum!: Date;

    @IsString()
    @IsNotEmpty()
    straatnaam!: string;

    @IsNumber()
    @IsNotEmpty()
    huisnummer!: number;

    @IsString()
    @IsNotEmpty()
    stad!: string;

    @IsNotEmpty()
    password!: string;

    //toegevoegd
    @IsArray()
    @IsNotEmpty()
    boekenlijst: IBookList[] = [];
}

export class UpsertUserDto implements IUpsertUser {
    @IsMongoId()
    @IsNotEmpty()
    _id!: string;

    @IsString()
    @IsNotEmpty()
    naam!: string;

    @IsString()
    @IsNotEmpty()
    email!: string;

    @IsNotEmpty()
    geboortedatum!: Date;

    @IsString()
    @IsNotEmpty()
    straatnaam!: string;

    @IsNumber()
    @IsNotEmpty()
    huisnummer!: number;

    @IsString()
    @IsNotEmpty()
    stad!: string;

    @IsNotEmpty()
    password!: string;

    //toegevoegd
    @IsArray()
    @IsNotEmpty()
    boekenlijst: IBookList[] = [];
}

export class UpdateUserDto implements IUpdateUser {
    _id?: string | undefined;
    
    @IsString()
    @IsNotEmpty()
    naam!: string;

    @IsString()
    @IsNotEmpty()
    email!: string;

    @IsNotEmpty()
    geboortedatum!: Date;

    @IsString()
    @IsNotEmpty()
    straatnaam!: string;

    @IsNumber()
    @IsNotEmpty()
    huisnummer!: number;

    @IsString()
    @IsNotEmpty()
    stad!: string;
    
    @IsNotEmpty()
    password!: string;

    @IsBoolean()
    @IsOptional()
    completed!: boolean;

    //toegevoegd
    @IsArray()
    @IsNotEmpty()
    boekenlijst: IBookList[] = [];
}

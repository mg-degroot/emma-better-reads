import {
    IsNotEmpty,
    IsString,
    IsBoolean,
    IsOptional,
    IsMongoId,
    IsNumber
} from 'class-validator';
import {
    ICreateUser,
    IUpdateUser,
    IUpsertUser
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

    @IsBoolean()
    @IsOptional()
    completed!: boolean;
}

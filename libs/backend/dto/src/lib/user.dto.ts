import {
    IsNotEmpty,
    IsString,
    IsBoolean,
    IsOptional,
    IsDate
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
    @IsString()
    @IsNotEmpty()
    naam!: string;

    @IsString()
    @IsNotEmpty()
    email!: string;

    @IsDate()
    @IsNotEmpty()
    geboortedatum!: Date;

    @IsDate()
    @IsNotEmpty()
    straatnaam!: string;

    @IsDate()
    @IsNotEmpty()
    huisnummer!: number;

    @IsDate()
    @IsNotEmpty()
    stad!: string;
}

export class UpsertUserDto implements IUpsertUser {
    @IsString()
    @IsNotEmpty()
    naam!: string;

    @IsString()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    id!: string;

    @IsDate()
    @IsNotEmpty()
    geboortedatum!: Date;

    @IsDate()
    @IsNotEmpty()
    straatnaam!: string;

    @IsDate()
    @IsNotEmpty()
    huisnummer!: number;

    @IsDate()
    @IsNotEmpty()
    stad!: string;
}

export class UpdateUserDto implements IUpdateUser {
    @IsString()
    @IsOptional()
    naam!: string;

    @IsString()
    @IsOptional()
    email!: string;

    @IsBoolean()
    @IsOptional()
    completed!: boolean;
}

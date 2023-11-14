import { Id } from './id.type';

export interface IUser {
    id: Id;
    naam: string;
    email: string;
    geboortedatum: Date;
    straatnaam: string;
    huisnummer: number;
    stad: string;
}

export type ICreateUser = Pick<
IUser,
    'naam' | 'email'
>;

export type IUpdateUser = Partial<Omit<IUser, 'id'>>;
export type IUpsertUser = IUser;

import { IBookList } from './booklist.interface';
import { Id } from './id.type';

export interface IUser {
    _id: Id;
    naam: string;
    email: string;
    geboortedatum: Date;
    straatnaam: string;
    huisnummer: number;
    stad: string;
    password: string;
    token?: string | null;

    //toegevoegd
    boekenlijst: IBookList[];
}

//boekenlijst toegevoegd
export type ICreateUser = Pick<IUser,
    'naam' | 'email' | 'geboortedatum' | 'straatnaam' | 'huisnummer' | 'stad' | 'password' | 'boekenlijst'
>;

export type IUpdateUser = Partial<Omit<IUser, '_id'>> & { boekenlijst?: IBookList[] };
export type IUpsertUser = IUser & { boekenlijst?: IBookList[] };

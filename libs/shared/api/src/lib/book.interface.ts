import { Id } from './id.type';

export interface IBook {
    id: Id;
    cover: string;
    titel: string;
    beschrijving: string;
    genre: string;
    origineletaal: string;
    publiceerdatum: Date;
    schrijver: string;
    paginas: number;
}

export type ICreateBook = Pick<
IBook,
    'titel' | 'schrijver'
>;

export type IUpdateBook = Partial<Omit<IBook, 'id'>>;
export type IUpsertBook = IBook;

import { Id } from './id.type';
import { IWriter } from './writer.interface';

type Book = string;

export interface IBook {
    id: Id;
    cover: string;
    titel: string;
    beschrijving: string;
    genre: string;
    origineletaal: string;
    publiceerdatum: Date;
    schrijver: IWriter;
    paginas: number;
}

export type ICreateBook = Pick<IBook,'cover' | 'titel' | 'beschrijving' | 'genre' | 'origineletaal' | 'publiceerdatum' | 'schrijver' | 'paginas'>;
export type IUpdateBook = Partial<Omit<IBook, 'id'>>;
export type IUpsertBook = IBook;

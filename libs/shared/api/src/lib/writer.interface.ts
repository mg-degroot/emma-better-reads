import { Id } from './id.type';

export interface IWriter {
    id: Id;
    schrijvernaam: string;
    geboortedatum: Date;
    bio: string;
    geboorteplaats: string;
    moedertaal: string;
}

export type ICreateWriter = Pick<IWriter,
    'schrijvernaam' | 'geboortedatum' | 'bio' | 'geboorteplaats' | 'moedertaal'
>;

export type IUpdateWriter = Partial<Omit<IWriter, 'id'>>;
export type IUpsertWriter = IWriter;

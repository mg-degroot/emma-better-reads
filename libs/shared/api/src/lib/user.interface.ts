import { Id } from './id.type';

export enum UserSort {
    Breakfast = 'Breakfast',
    Lunch = 'Lunch',
    Dinner = 'Dinner',
    Other = 'Other'
}

// Voor nu is onze user een string; later zullen we hier een User object van maken.
type User = string;

export interface IUser {
    id: Id;
    title: string;
    description: string;
    isVega: boolean;
    dateServed: Date;
    sort: UserSort;
    // Naam van de persoon die de maaltijd aanmaakt en kookt.
    cook: User;
}

export type ICreateUser = Pick<
IUser,
    'title' | 'description' | 'sort' | 'cook'
>;

export type IUpdateUser = Partial<Omit<IUser, 'id'>>;
export type IUpsertUser = IUser;

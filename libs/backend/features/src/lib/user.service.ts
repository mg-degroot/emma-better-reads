import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser, UserSort } from '@nx-emma-indiv/shared/api';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';

@Injectable()
export class UserService {
    TAG = 'UserService';

    private users$ = new BehaviorSubject<IUser[]>([
        {
            id: '0',
            title: 'Broodje',
            description: 'Vega version of the famous spaghetti recipe.',
            isVega: true,
            dateServed: new Date(),
            sort: UserSort.Breakfast,
            cook: 'Someone',
        },
    ]);
    

    getAll(): IUser[] {
        Logger.log('getAll', this.TAG);
        return this.users$.value;
    }

    getOne(id: string): IUser {
        Logger.log(`getOne(${id})`, this.TAG);
        const user = this.users$.value.find((td) => td.id === id);
        if (!user) {
            throw new NotFoundException(`User could not be found!`);
        }
        return user;
    }

    /**
     * Update the arg signature to match the DTO, but keep the
     * return signature - we still want to respond with the complete
     * object
     */
    create(user: Pick<IUser, 'title' | 'description'>): IUser {
        Logger.log('create', this.TAG);
        const current = this.users$.value;
        // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
        const newUser: IUser = {
            ...user,
            id: `meal-${Math.floor(Math.random() * 10000)}`,
            isVega: false,
            dateServed: new Date(),
            sort: UserSort.Breakfast,
            cook: 'Someone',
        };
        this.users$.next([...current, newUser]);
        return newUser;
    }
}

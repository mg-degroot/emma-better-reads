import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from '@nx-emma-indiv/shared/api';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';

@Injectable()
export class UserService {
    TAG = 'UserService';

    private users$ = new BehaviorSubject<IUser[]>([
        {
            id: '1',
            naam: 'Kip van Braan',
            email: 'avans@student.avans.nl',
            geboortedatum: new Date,
            straatnaam: 'Lovendijk',
            huisnummer: 15,
            stad: 'Breda',
        },
        {
            id: '2',
            naam: 'Owen Boers',
            email: 'avans2@student.avans.nl',
            geboortedatum: new Date,
            straatnaam: 'Dorpstraat',
            huisnummer: 55,
            stad: 'Oudenbosch',
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
    create(user: Pick<IUser, 'naam' | 'email'>): IUser {
        Logger.log('create', this.TAG);
        const current = this.users$.value;

        // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
        
        const newUser: IUser = {
            ...user,
            id: `meal-${Math.floor(Math.random() * 10000)}`,
            geboortedatum: new Date(),
            straatnaam: 'Here',
            huisnummer: Math.floor(Math.random() * 10000),
            stad: 'Somewhere',
        };
        this.users$.next([...current, newUser]);
        return newUser;
    }
}

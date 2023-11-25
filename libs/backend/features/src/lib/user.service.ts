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
            geboortedatum: new Date(2001, 8, 12),
            straatnaam: 'Lovendijk',
            huisnummer: 15,
            stad: 'Breda',
        },
        {
            id: '2',
            naam: 'Owen Boers',
            email: 'avans2@student.avans.nl',
            geboortedatum: new Date(1999, 0, 30),
            straatnaam: 'Dorpstraat',
            huisnummer: 55,
            stad: 'Oudenbosch',
        },
        {
            id: '3',
            naam: 'Mojo Maas',
            email: 'avans3@student.avans.nl',
            geboortedatum: new Date(2005, 9, 11),
            straatnaam: 'Bielang',
            huisnummer: 115,
            stad: 'Utrecht',
        },
        {
            id: '4',
            naam: 'Puck Avery',
            email: 'avans4@student.avans.nl',
            geboortedatum: new Date(1998, 11, 30),
            straatnaam: 'Hoofdstraat',
            huisnummer: 1,
            stad: 'Roosendaal',
        },
        {
            id: '5',
            naam: 'Maya Oostvogels',
            email: 'avans5@student.avans.nl',
            geboortedatum: new Date(2000, 4, 29),
            straatnaam: 'Hoofdstraat',
            huisnummer: 1,
            stad: 'Roosendaal',
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

    create(user: IUser): IUser {
        Logger.log(`create(${user.id})`, this.TAG);
        
        // Increment the current length by 1 to get the next ID
        const nextId = String(this.users$.value.length + 1);
        const newUser = { ...user, id: nextId };
      
        console.log('Next ID:', nextId);
        console.log('New User:', newUser);
      
        this.users$.next([...this.users$.value, newUser]);
      
        return newUser;
      }
      
        update(user: IUser): IUser {
          Logger.log(`update(${user.id})`, this.TAG);
          const index = this.users$.value.findIndex((td) => td.id == user.id);
          
          if (index == -1) {
            throw new Error(`User with id ${user.id} not found`);
          }
      
          this.users$.value[index] = { ...this.users$.value[index], ...user };
      
          return this.users$.value[index];
        }
      
        deleteUser(id: string): void {
          Logger.log(`delete(${id})`, this.TAG);
          // Find the index of the user with the given id
          const index = this.users$.value.findIndex((td) => td.id === id);
        
          // Check if the user with the given id was found
          if (index == -1) {
            throw new Error(`User with id ${id} not found`);
          }
        
          // Update the users$ observable by creating a new array without the user to be deleted
          this.users$.next([
            ...this.users$.value.slice(0, index),
            ...this.users$.value.slice(index + 1),
          ]);
        }
}

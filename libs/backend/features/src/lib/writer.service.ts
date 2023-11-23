import { Injectable, NotFoundException } from '@nestjs/common';
import { IWriter } from '@nx-emma-indiv/shared/api';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';

@Injectable()
export class WriterService {
    TAG = 'WriterService';

    private writers$ = new BehaviorSubject<IWriter[]>([
        {
            id: '1',
            schrijvernaam: 'Delia Owens',
            geboortedatum: new Date('1949-05-25'),
            bio: 'Delia Owens is an American author and zoologist. She is best known for her debut novel, Where the Crawdads Sing, which became a bestseller.',
            geboorteplaats: 'Thomasville, Georgia, USA',
            moedertaal: 'English',
          },
          {
            id: '2',
            schrijvernaam: 'Tara Westover',
            geboortedatum: new Date('1986-09-27'),
            bio: 'Tara Westover is an American author known for her memoir Educated. She was born in Clifton, Idaho, and her journey from a strict household to earning a PhD is detailed in her book.',
            geboorteplaats: 'Clifton, Idaho, USA',
            moedertaal: 'English',
          },
          {
            id: '3',
            schrijvernaam: 'John Doe',
            geboortedatum: new Date('1970-01-01'),
            bio: 'John Doe is a pseudonymous author known for The Great Adventure. Not much is known about the author as they prefer to keep their identity a secret.',
            geboorteplaats: 'Unknown',
            moedertaal: 'English',
          },
          {
            id: '4',
            schrijvernaam: 'Alex Michaelides',
            geboortedatum: new Date('Unknown'),
            bio: 'Alex Michaelides is a British-Cypriot author and screenwriter. He is best known for his psychological thriller, The Silent Patient.',
            geboorteplaats: 'Unknown',
            moedertaal: 'English',
          },
          {
            id: '5',
            schrijvernaam: 'Brit Bennett',
            geboortedatum: new Date('1989-06-24'),
            bio: 'Brit Bennett is an American author known for her novels The Mothers and The Vanishing Half. She explores themes of identity, race, and family in her works.',
            geboorteplaats: 'Los Angeles, California, USA',
            moedertaal: 'English',
          },
          {
            id: '6',
            schrijvernaam: 'Yuval Noah Harari',
            geboortedatum: new Date('1976-02-24'),
            bio: 'Yuval Noah Harari is an Israeli historian and professor. He is best known for his book Sapiens: A Brief History of Humankind, which explores the evolution of humanity.',
            geboorteplaats: 'Haifa, Israel',
            moedertaal: 'Hebrew',
          },
          {
            id: '7',
            schrijvernaam: 'Erin Morgenstern',
            geboortedatum: new Date('1978-07-08'),
            bio: 'Erin Morgenstern is an American author and multimedia artist. She gained fame with her novel The Night Circus, a magical tale set in an enchanting world.',
            geboorteplaats: 'Marshfield, Massachusetts, USA',
            moedertaal: 'English',
          },
          {
            id: '8',
            schrijvernaam: 'Donna Tartt',
            geboortedatum: new Date('1963-12-23'),
            bio: 'Donna Tartt is an American author and winner of the Pulitzer Prize for Fiction. She is known for her novels, including The Goldfinch, which explores the life of a young boy after a tragic event.',
            geboorteplaats: 'Greenwood, Mississippi, USA',
            moedertaal: 'English',
          },
          {
            id: '9',
            schrijvernaam: 'Jane Smith',
            geboortedatum: new Date('1985-04-10'),
            bio: 'Jane Smith is a mystery author known for her gripping tales of intrigue and suspense. The Mystery of the Missing Code is one of her notable works.',
            geboorteplaats: 'Unknown',
            moedertaal: 'English',
          },
          {
            id: '10',
            schrijvernaam: 'Fantasy Author',
            geboortedatum: new Date('Unknown'),
            bio: 'Fantasy Author is a pseudonymous writer known for creating immersive worlds of magic and fantasy. Fantasy Realm is one of the captivating tales from this author.',
            geboorteplaats: 'Unknown',
            moedertaal: 'Elvish',
          },
    ]);
    

    getAll(): IWriter[] {
        Logger.log('getAll', this.TAG);
        return this.writers$.value;
    }

    getOne(id: string): IWriter {
        Logger.log(`getOne(${id})`, this.TAG);
        const writer = this.writers$.value.find((td) => td.id === id);
        if (!writer) {
            throw new NotFoundException(`Writer could not be found!`);
        }
        return writer;
    }

    /**
     * Update the arg signature to match the DTO, but keep the
     * return signature - we still want to respond with the complete
     * object
     */
    create(writer: Pick<IWriter, 'schrijvernaam' | 'geboortedatum'>): IWriter {
        Logger.log('create', this.TAG);
        const current = this.writers$.value;

        // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
        
        const newWriter: IWriter = {
            ...writer,
            id: `meal-${Math.floor(Math.random() * 10000)}`,
            schrijvernaam: '',
            geboortedatum: new Date(),
            bio: '',
            geboorteplaats: '',
            moedertaal: ''

        };
        this.writers$.next([...current, newWriter]);
        return newWriter;
    }
}

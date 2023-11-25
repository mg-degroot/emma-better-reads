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
          bio: 'Delia Owens is een Amerikaanse auteur en zoöloog. Ze is het meest bekend om haar debuutroman, Waar de Crawdads Zingen, dat een bestseller werd.',
          geboorteplaats: 'Thomasville, Georgia, VS',
          moedertaal: 'Engels',
          },
          {
            id: '2',
            schrijvernaam: 'Tara Westover',
            geboortedatum: new Date('1986-09-27'),
            bio: 'Tara Westover is een Amerikaanse auteur bekend om haar memoires Geschoold. Ze is geboren in Clifton, Idaho, en haar reis van een streng huishouden naar het behalen van een PhD wordt gedetailleerd beschreven in haar boek.',
            geboorteplaats: 'Clifton, Idaho, VS',
            moedertaal: 'Engels',
          },
          {
            id: '3',
            schrijvernaam: 'John Doe',
            geboortedatum: new Date('1970-01-01'),
            bio: 'John Doe is een pseudonieme auteur bekend om Het Grote Avontuur. Er is niet veel bekend over de auteur, omdat ze hun identiteit liever geheim houden.',
            geboorteplaats: 'Onbekend',
            moedertaal: 'Engels',
          },
          {
            id: '4',
            schrijvernaam: 'Alex Michaelides',
            geboortedatum: new Date('Onbekend'),
            bio: 'Alex Michaelides is een Brits-Cypriotische auteur en scenarioschrijver. Hij is het meest bekend om zijn psychologische thriller, De Stille Patiënt.',
            geboorteplaats: 'Onbekend',
            moedertaal: 'Engels',
          },
          {
            id: '5',
            schrijvernaam: 'Brit Bennett',
            geboortedatum: new Date('1989-06-24'),
            bio: 'Brit Bennett is een Amerikaanse auteur bekend om haar romans The Mothers en Het Voorval van de Verdwenen Tweeling. Ze verkent thema\'s van identiteit, ras en familie in haar werken.',
            geboorteplaats: 'Los Angeles, Californië, VS',
            moedertaal: 'Engels',
          },
          {
            id: '6',
            schrijvernaam: 'Yuval Noah Harari',
            geboortedatum: new Date('1976-02-24'),
            bio: 'Yuval Noah Harari is een Israëlische historicus en hoogleraar. Hij is het meest bekend om zijn boek Sapiens: Een Korte Geschiedenis van de Mensheid, dat de evolutie van de mensheid verkent.',
            geboorteplaats: 'Haifa, Israël',
            moedertaal: 'Hebreeuws',
          },
          {
            id: '7',
            schrijvernaam: 'Erin Morgenstern',
            geboortedatum: new Date('1978-07-08'),
            bio: 'Erin Morgenstern is een Amerikaanse auteur en multimedia-kunstenaar. Ze verwierf bekendheid met haar roman Het Nachtcircus, een magisch verhaal dat zich afspeelt in een betoverende wereld.',
            geboorteplaats: 'Marshfield, Massachusetts, USA',
            moedertaal: 'Nederlands',
          },
          {
            id: '8',
            schrijvernaam: 'Donna Tartt',
            geboortedatum: new Date('1963-12-23'),
            bio: 'Donna Tartt is een Amerikaanse auteur en winnaar van de Pulitzer Prize voor fictie. Ze staat bekend om haar romans, waaronder Het Puttertje, waarin ze het leven van een jongen verkent na een tragische gebeurtenis.',
            geboorteplaats: 'Greenwood, Mississippi, USA',
            moedertaal: 'Nederlands',
          },
          {
            id: '9',
            schrijvernaam: 'Jane Smith',
            geboortedatum: new Date('1985-04-10'),
            bio: 'Jane Smith is een mysterieauteur die bekend staat om haar meeslepende verhalen vol intrige en spanning. Mysterie van de Vermiste Code is een van haar opmerkelijke werken.',
            geboorteplaats: 'Onbekend',
            moedertaal: 'Nederlands',
          },
          {
            id: '10',
            schrijvernaam: 'Fantasy-auteur',
            geboortedatum: new Date('Onbekend'),
            bio: 'Fantasy-auteur is een pseudonieme schrijver die bekend staat om het creëren van meeslepende werelden van magie en fantasie. Fantasierealm is een van de boeiende verhalen van deze auteur.',
            geboorteplaats: 'Onbekend',
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

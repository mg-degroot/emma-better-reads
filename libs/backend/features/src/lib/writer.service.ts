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
          profielFoto: 'https://images.squarespace-cdn.com/content/v1/5aadc6402714e55458f1f5b6/1617060360564-Z0RG3T8PMLBWJJUTY105/delia-owens-2020-2.jpg',
          schrijvernaam: 'Delia Owens',
          geboortedatum: new Date('1949-05-25'),
          bio: 'Delia Owens is een Amerikaanse auteur en zoöloog. Ze is het meest bekend om haar debuutroman, Waar de Crawdads Zingen, dat een bestseller werd.',
          geboorteplaats: 'Thomasville, Georgia, VS',
          moedertaal: 'Engels',
          },
          {
            id: '2',
            profielFoto: 'https://www.debezigebij.nl/wp-content/uploads/sites/53/external/be36c0cfda7771eb67d7e0a4af1f5656-200x0-c-default.png?t=1685125975',
            schrijvernaam: 'Tara Westover',
            geboortedatum: new Date('1986-09-27'),
            bio: 'Tara Westover is een Amerikaanse auteur bekend om haar memoires Geschoold. Ze is geboren in Clifton, Idaho, en haar reis van een streng huishouden naar het behalen van een PhD wordt gedetailleerd beschreven in haar boek.',
            geboorteplaats: 'Clifton, Idaho, VS',
            moedertaal: 'Engels',
          },
          {
            id: '3',
            profielFoto: '',
            schrijvernaam: 'John Doe',
            geboortedatum: new Date('1970-01-01'),
            bio: 'John Doe is een pseudonieme auteur bekend om Het Grote Avontuur. Er is niet veel bekend over de auteur, omdat ze hun identiteit liever geheim houden.',
            geboorteplaats: 'Onbekend',
            moedertaal: 'Engels',
          },
          {
            id: '4',
            profielFoto: 'https://www.athensinsider.com/wp-content/uploads/2020/01/Alex-Michailides-for-website.jpg',
            schrijvernaam: 'Alex Michaelides',
            geboortedatum: new Date('Onbekend'),
            bio: 'Alex Michaelides is een Brits-Cypriotische auteur en scenarioschrijver. Hij is het meest bekend om zijn psychologische thriller, De Stille Patiënt.',
            geboorteplaats: 'Onbekend',
            moedertaal: 'Engels',
          },
          {
            id: '5',
            profielFoto: 'https://upload.wikimedia.org/wikipedia/commons/9/96/BritBennett.jpg',
            schrijvernaam: 'Brit Bennett',
            geboortedatum: new Date('1989-06-24'),
            bio: 'Brit Bennett is een Amerikaanse auteur bekend om haar romans The Mothers en Het Voorval van de Verdwenen Tweeling. Ze verkent thema\'s van identiteit, ras en familie in haar werken.',
            geboorteplaats: 'Los Angeles, Californië, VS',
            moedertaal: 'Engels',
          },
          {
            id: '6',
            profielFoto: 'https://assets.weforum.org/sf_account/image/OYPGh90FjJt0XME4g2dW5jxEQzBdvNv7YPGsrt8tqds.jpg',
            schrijvernaam: 'Yuval Noah Harari',
            geboortedatum: new Date('1976-02-24'),
            bio: 'Yuval Noah Harari is een Israëlische historicus en hoogleraar. Hij is het meest bekend om zijn boek Sapiens: Een Korte Geschiedenis van de Mensheid, dat de evolutie van de mensheid verkent.',
            geboorteplaats: 'Haifa, Israël',
            moedertaal: 'Hebreeuws',
          },
          {
            id: '7',
            profielFoto: 'https://erinmorgenstern.com/wp-content/uploads/2018/11/erin1-610x839.jpg',
            schrijvernaam: 'Erin Morgenstern',
            geboortedatum: new Date('1978-07-08'),
            bio: 'Erin Morgenstern is een Amerikaanse auteur en multimedia-kunstenaar. Ze verwierf bekendheid met haar roman Het Nachtcircus, een magisch verhaal dat zich afspeelt in een betoverende wereld.',
            geboorteplaats: 'Marshfield, Massachusetts, USA',
            moedertaal: 'Nederlands',
          },
          {
            id: '8',
            profielFoto: 'https://images0.persgroep.net/rcs/a6VYjNLYCabnjMOnLPRZM7FgSTM/diocontent/112402275/_crop/0/0/1312/2000/_fitwidth/1240?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.9',
            schrijvernaam: 'Donna Tartt',
            geboortedatum: new Date('1963-12-23'),
            bio: 'Donna Tartt is een Amerikaanse auteur en winnaar van de Pulitzer Prize voor fictie. Ze staat bekend om haar romans, waaronder Het Puttertje, waarin ze het leven van een jongen verkent na een tragische gebeurtenis.',
            geboorteplaats: 'Greenwood, Mississippi, USA',
            moedertaal: 'Nederlands',
          },
          {
            id: '9',
            profielFoto: 'https://upload.wikimedia.org/wikipedia/en/0/0e/Sarah_Jane_Smith_2006.jpg',
            schrijvernaam: 'Jane Smith',
            geboortedatum: new Date('1985-04-10'),
            bio: 'Jane Smith is een mysterieauteur die bekend staat om haar meeslepende verhalen vol intrige en spanning. Mysterie van de Vermiste Code is een van haar opmerkelijke werken.',
            geboorteplaats: 'Onbekend',
            moedertaal: 'Nederlands',
          },
          {
            id: '10',
            profielFoto: '',
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
    create(writer: IWriter): IWriter {
      Logger.log(`create(${writer.id})`, this.TAG);
      
      // Increment the current length by 1 to get the next ID
      const nextId = String(this.writers$.value.length + 1);
      const newWriter = { ...writer, id: nextId };
    
      console.log('Next ID:', nextId);
      console.log('New Writer:', newWriter);
    
      this.writers$.next([...this.writers$.value, newWriter]);
    
      return newWriter;
    }
    
      update(writer: IWriter): IWriter {
        Logger.log(`update(${writer.id})`, this.TAG);
        const index = this.writers$.value.findIndex((td) => td.id == writer.id);
        
        if (index == -1) {
          throw new Error(`Writer with id ${writer.id} not found`);
        }
    
        this.writers$.value[index] = { ...this.writers$.value[index], ...writer };
    
        return this.writers$.value[index];
      }

    deleteWriter(id: string): void {
      Logger.log(`delete(${id})`, this.TAG);
      // Find the index of the writer with the given id
      const index = this.writers$.value.findIndex((td) => td.id === id);
    
      // Check if the writer with the given id was found
      if (index == -1) {
        throw new Error(`Writer with id ${id} not found`);
      }
    
      // Update the writers$ observable by creating a new array without the writer to be deleted
      this.writers$.next([
        ...this.writers$.value.slice(0, index),
        ...this.writers$.value.slice(index + 1),
      ]);
    }

}

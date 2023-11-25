import { Injectable, NotFoundException } from '@nestjs/common';
import { IBook } from '@nx-emma-indiv/shared/api';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';

@Injectable()
export class BookService {
    TAG = 'BookService';

    private books$ = new BehaviorSubject<IBook[]>([
          {
            id: '0',
            cover: 'https://m.media-amazon.com/images/I/81HA6TJ5K-L._AC_UF1000,1000_QL80_.jpg',
            titel: 'Waar de Crawdads Zingen',
            beschrijving: `Waar de Crawdads Zingen is een meeslepende roman die de mysteries van de natuur en het menselijk hart met elkaar verweeft. Delia Owens, de auteur, neemt lezers mee op een betoverende reis naar de moerassen van North Carolina en introduceert ons aan de raadselachtige Kya Clark, ook wel bekend als de "Moerasmeisje". Verlaten door haar familie en achtergelaten om alleen te overleven, groeit Kya op in het wild. Terwijl Kya de uitdagingen van eenzaamheid navigeert, wordt ze een expert in de natuurlijke wereld om haar heen en ontwikkelt ze een diepe verbinding met de wezens die het moeras bewonen. Het verhaal neemt een onverwachte wending wanneer een lokale man dood wordt gevonden en Kya de hoofdverdachte wordt. De roman vermengt naadloos een coming-of-age verhaal met een rechtbankdrama en houdt lezers op het puntje van hun stoel. De proza van Owens is lyrisch en suggestief, en schildert een levendig beeld van de schoonheid van het moeras en de harde realiteiten van Kya's leven. Waar de Crawdads Zingen is een aangrijpende verkenning van eenzaamheid, veerkracht en de ontembare geest van een jonge vrouw te midden van de wilde natuur.`,
            genre: 'Fictie',
            origineletaal: 'Nederlands',
            publiceerdatum: new Date('2018-08-14'),
            schrijver: {
              id: '1',
              schrijvernaam: 'Delia Owens',
              geboortedatum: new Date('1949-05-25'),
              bio: 'Delia Owens is een Amerikaanse auteur en zoöloog. Ze is het meest bekend om haar debuutroman, Waar de Crawdads Zingen, dat een bestseller werd.',
              geboorteplaats: 'Thomasville, Georgia, VS',
              moedertaal: 'Engels',
            },
            paginas: 384,
          },
          {
            id: '1',
            cover: 'https://m.media-amazon.com/images/I/81NwOj14S6L._AC_UF1000,1000_QL80_.jpg',
            titel: 'Geschoold',
            beschrijving: `Geschoold is een krachtige memoires van Tara Westover, die haar reis vertelt van opgroeien in een streng en gewelddadig huishouden in landelijk Idaho tot het behalen van een PhD aan de Universiteit van Cambridge. Tara's zoektocht naar kennis en zelfontdekking brengt haar op een uitdagend pad waar ze wordt geconfronteerd met de complexiteiten van familie-loyaliteit en het nastreven van onderwijs. Westovers verhaal is zowel hartverscheurend als inspirerend, terwijl ze worstelt met de tegenstellingen tussen de overtuigingen van haar familie en de buitenwereld. Het boek verkent thema's van veerkracht, de transformerende kracht van onderwijs en de strijd om los te breken uit de beperkingen van de opvoeding. Geschoold is een boeiende en prikkelende memoires die vragen oproept over de aard van identiteit, het belang van onderwijs en de lengtes die iemand kan gaan om tegenspoed te overwinnen.`,
            genre: 'Biografie',
            origineletaal: 'Nederlands',
            publiceerdatum: new Date('2018-02-20'),
            schrijver: {
              id: '2',
              schrijvernaam: 'Tara Westover',
              geboortedatum: new Date('1986-09-27'),
              bio: 'Tara Westover is een Amerikaanse auteur bekend om haar memoires Geschoold. Ze is geboren in Clifton, Idaho, en haar reis van een streng huishouden naar het behalen van een PhD wordt gedetailleerd beschreven in haar boek.',
              geboorteplaats: 'Clifton, Idaho, VS',
              moedertaal: 'Engels',
            },
            paginas: 352,
          },
          {
            id: '2',
            cover: 'https://m.media-amazon.com/images/I/81K3WBwcGRL._AC_UF1000,1000_QL80_.jpg',
            titel: 'Het Grote Avontuur',
            beschrijving: 'Een opwindende reis naar het onbekende.',
            genre: 'Avontuur',
            origineletaal: 'Nederlands',
            publiceerdatum: new Date('2023-01-01'),
            schrijver: {
              id: '3',
              schrijvernaam: 'John Doe',
              geboortedatum: new Date('1970-01-01'),
              bio: 'John Doe is een pseudonieme auteur bekend om Het Grote Avontuur. Er is niet veel bekend over de auteur, omdat ze hun identiteit liever geheim houden.',
              geboorteplaats: 'Onbekend',
              moedertaal: 'Engels',
            },
            paginas: 300,
          },
          {
            id: '4',
            cover: 'https://media.s-bol.com/NKEEmRjE7A66/g7BW59/544x840.jpg',
            titel: 'De Stille Patiënt',
            beschrijving: 'Een psychologische thriller die je aan het raden houdt.',
            genre: 'Thriller',
            origineletaal: 'Nederlands',
            publiceerdatum: new Date('2019-02-05'),
            schrijver: {
              id: '4',
              schrijvernaam: 'Alex Michaelides',
              geboortedatum: new Date('Onbekend'),
              bio: 'Alex Michaelides is een Brits-Cypriotische auteur en scenarioschrijver. Hij is het meest bekend om zijn psychologische thriller, De Stille Patiënt.',
              geboorteplaats: 'Onbekend',
              moedertaal: 'Engels',
            },
            paginas: 336,
          },
          {
            id: '4',
            cover: 'https://media.s-bol.com/5VQqwpx4OMPZ/1Wk51OG/534x840.jpg',
            titel: 'Het Voorval van de Verdwenen Tweeling',
            beschrijving: `Het Voorval van de Verdwenen Tweeling is een doordachte roman van Brit Bennett die thema's van identiteit, ras en familie onderzoekt. Het verhaal draait om de Vignes-zussen, Stella en Desiree, die opgroeiden in een kleine, overwegend zwarte stad. De roman neemt een onverwachte wending wanneer de zussen verschillende paden kiezen in het leven, met Stella die zich voordoet als wit en Desiree die terugkeert naar haar roots. Bennett's verhaal verkent de impact van de keuzes van de zussen op hun leven en dat van de mensen om hen heen. De roman strekt zich uit over decennia en biedt een rijke lappendeken van personages en hun onderling verbonden verhalen. Het Voorval van de Verdwenen Tweeling is een boeiende verkenning van de complexiteiten van identiteit en de blijvende banden die ons verbinden met ons verleden.`,
            genre: 'Historische Fictie',
            origineletaal: 'Nederlands',
            publiceerdatum: new Date('2020-06-02'),
            schrijver: {
              id: '5',
              schrijvernaam: 'Brit Bennett',
              geboortedatum: new Date('1989-06-24'),
              bio: 'Brit Bennett is een Amerikaanse auteur bekend om haar romans The Mothers en Het Voorval van de Verdwenen Tweeling. Ze verkent thema\'s van identiteit, ras en familie in haar werken.',
              geboorteplaats: 'Los Angeles, Californië, VS',
              moedertaal: 'Engels',
            },
            paginas: 352,
          },
          {
            id: '5',
            cover: 'https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF894,1000_QL80_.jpg',
            titel: 'Sapiens: Een Korte Geschiedenis van de Mensheid',
            beschrijving: `Sapiens: Een Korte Geschiedenis van de Mensheid door Yuval Noah Harari is een boeiende reis door de geschiedenis van de mensheid. Harari onderzoekt de evolutie van Homo sapiens van de oudheid tot heden en onderzoekt belangrijke revoluties die menselijke samenlevingen hebben gevormd, waaronder de Cognitieve Revolutie, Agrarische Revolutie en Wetenschappelijke Revolutie. Het boek daagt conventionele wijsheid uit en daagt lezers uit om hun begrip van geschiedenis en de krachten die de menselijke cultuur hebben gevormd opnieuw te overwegen. Harari's verhaal is zowel informatief als prikkelend en stelt vragen over de impact van technologie, de vorming van rijken en de toekomst van onze soort. Sapiens is een must-read voor degenen die geïnteresseerd zijn in een uitgebreid en boeiend overzicht van de menselijke geschiedenis dat traditionele grenzen overstijgt.`,
            genre: 'Geschiedenis',
            origineletaal: 'Nederlands',
            publiceerdatum: new Date('2014-02-10'),
            schrijver: {
              id: '6',
              schrijvernaam: 'Yuval Noah Harari',
              geboortedatum: new Date('1976-02-24'),
              bio: 'Yuval Noah Harari is een Israëlische historicus en hoogleraar. Hij is het meest bekend om zijn boek Sapiens: Een Korte Geschiedenis van de Mensheid, dat de evolutie van de mensheid verkent.',
              geboorteplaats: 'Haifa, Israël',
              moedertaal: 'Hebreeuws',
            },
            paginas: 464,
          },
          {
            id: '6',
            cover: 'https://m.media-amazon.com/images/I/71jqpBOycFL._AC_UF894,1000_QL80_.jpg',
            titel: 'Het Nachtcircus',
            beschrijving: `Het Nachtcircus van Erin Morgenstern is een magisch verhaal dat lezers meeneemt naar een wereld vol betovering en verwondering. Het verhaal draait om een mysterieuze competitie tussen twee illusionisten, Celia en Marco, die gebonden zijn aan een lot dat buiten hun controle ligt. Gevestigd binnen de grenzen van het betoverende Nachtcircus, weeft de roman een tapijt van buitengewone kunststukken en magische optredens. Naarmate de competitie zich ontvouwt, vervagen de grenzen tussen realiteit en illusie, waardoor een betoverende en meeslepende ervaring ontstaat voor zowel de personages als de lezers. Morgensterns lyrische proza en fantasierijke vertelstijl maken Het Nachtcircus tot een betoverende reis naar een rijk van dromen en illusies, waar de grens tussen fantasie en werkelijkheid prachtig vervaagd is.`,
            genre: 'Fantasy',
            origineletaal: 'Nederlands',
            publiceerdatum: new Date('2011-09-13'),
            schrijver: {
              id: '7',
              schrijvernaam: 'Erin Morgenstern',
              geboortedatum: new Date('1978-07-08'),
              bio: 'Erin Morgenstern is een Amerikaanse auteur en multimedia-kunstenaar. Ze verwierf bekendheid met haar roman Het Nachtcircus, een magisch verhaal dat zich afspeelt in een betoverende wereld.',
              geboorteplaats: 'Marshfield, Massachusetts, USA',
              moedertaal: 'Nederlands',
            },
            paginas: 512,
          },
          {
            id: '7',
            cover: 'https://upload.wikimedia.org/wikipedia/en/e/eb/The_goldfinch_by_donna_tart.png',
            titel: 'Het Puttertje',
            beschrijving: 'Een roman over een jongen wiens leven verandert na een tragische gebeurtenis.',
            genre: 'Hedendaagse fictie',
            origineletaal: 'Nederlands',
            publiceerdatum: new Date('2013-10-22'),
            schrijver: {
              id: '8',
              schrijvernaam: 'Donna Tartt',
              geboortedatum: new Date('1963-12-23'),
              bio: 'Donna Tartt is een Amerikaanse auteur en winnaar van de Pulitzer Prize voor fictie. Ze staat bekend om haar romans, waaronder Het Puttertje, waarin ze het leven van een jongen verkent na een tragische gebeurtenis.',
              geboorteplaats: 'Greenwood, Mississippi, USA',
              moedertaal: 'Nederlands',
            },
            paginas: 771,
          },
          {
            id: '8',
            cover: 'https://images-na.ssl-images-amazon.com/images/I/91U3gvhFNuL._AC_UL600_SR600,600_.jpg',
            titel: 'Mysterie van de Vermiste Code',
            beschrijving: 'Een meeslepend verhaal vol intrige en spanning.',
            genre: 'Mysterie',
            origineletaal: 'Nederlands',
            publiceerdatum: new Date('2023-02-15'),
            schrijver: {
              id: '9',
              schrijvernaam: 'Jane Smith',
              geboortedatum: new Date('1985-04-10'),
              bio: 'Jane Smith is een mysterieauteur die bekend staat om haar meeslepende verhalen vol intrige en spanning. Mysterie van de Vermiste Code is een van haar opmerkelijke werken.',
              geboorteplaats: 'Onbekend',
              moedertaal: 'Nederlands',
            },
            paginas: 250,
          },          
          {
            id: '9',
            cover: 'https://cf.geekdo-images.com/A7IOpPt-lHrMYsbRmxXWdQ__itemrep/img/jI1OdHfT1AbmN-AU7zl241CDcm4=/fit-in/246x300/filters:strip_icc()/pic6177962.jpg',
            titel: 'Fantasierealm',
            beschrijving: 'Dompel jezelf onder in een wereld vol magie en fantasie.',
            genre: 'Fantasie',
            origineletaal: 'Elvish',
            publiceerdatum: new Date('2023-03-30'),
            schrijver: {
              id: '10',
              schrijvernaam: 'Fantasy-auteur',
              geboortedatum: new Date('Onbekend'),
              bio: 'Fantasy-auteur is een pseudonieme schrijver die bekend staat om het creëren van meeslepende werelden van magie en fantasie. Fantasierealm is een van de boeiende verhalen van deze auteur.',
              geboorteplaats: 'Onbekend',
              moedertaal: 'Elvish',
            },
            paginas: 400,
          },
          
    ]);
  bookService: any;
    

    getAll(): IBook[] {
        Logger.log('getAll', this.TAG);
        return this.books$.value;
    }

    getOne(id: string): IBook {
        Logger.log(`getOne(${id})`, this.TAG);
        const book = this.books$.value.find((td) => td.id === id);
        if (!book) {
            throw new NotFoundException(`Book could not be found!`);
        }
        return book;
    }

    create(book: IBook): IBook {
      Logger.log(`create(${book.id})`, this.TAG);
      
      // Increment the current length by 1 to get the next ID
      const nextId = String(this.books$.value.length + 1);
      const newBook = { ...book, id: nextId };
    
      console.log('Next ID:', nextId);
      console.log('New Book:', newBook);
    
      this.books$.next([...this.books$.value, newBook]);
    
      return newBook;
    }
    
      update(book: IBook): IBook {
        Logger.log(`update(${book.id})`, this.TAG);
        const index = this.books$.value.findIndex((td) => td.id == book.id);
        
        if (index == -1) {
          throw new Error(`Book with id ${book.id} not found`);
        }
    
        this.books$.value[index] = { ...this.books$.value[index], ...book };
    
        return this.books$.value[index];
      }
    
      deleteBook(id: string): void {
        Logger.log(`delete(${id})`, this.TAG);
        // Find the index of the book with the given id
        const index = this.books$.value.findIndex((td) => td.id === id);
      
        // Check if the book with the given id was found
        if (index == -1) {
          throw new Error(`Book with id ${id} not found`);
        }
      
        // Update the books$ observable by creating a new array without the book to be deleted
        this.books$.next([
          ...this.books$.value.slice(0, index),
          ...this.books$.value.slice(index + 1),
        ]);
      }
      
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { IBook } from '@nx-emma-indiv/shared/api';
import { BehaviorSubject } from 'rxjs';
import { Logger } from '@nestjs/common';

@Injectable()
export class BookService {
    TAG = 'BookService';

    private books$ = new BehaviorSubject<IBook[]>([
            {
                id: '1',
                cover: 'https://m.media-amazon.com/images/I/81HA6TJ5K-L._AC_UF1000,1000_QL80_.jpg',
                titel: 'Where the Crawdads Sing',
                beschrijving: `Where the Crawdads Sing is a captivating novel that weaves together the mysteries of nature
                and the human heart. Delia Owens, the author, takes readers on a mesmerizing journey to the marshes of
                North Carolina, introducing us to the enigmatic Kya Clark, known as the "Marsh Girl." Abandoned by her
                family and left to survive on her own, Kya grows up isolated in the wild.
            
                As Kya navigates the challenges of solitude, she becomes an expert in the natural world around her,
                developing a deep connection with the creatures that inhabit the marsh. The story takes an unexpected turn
                when a local man is found dead, and Kya becomes the prime suspect. The novel seamlessly blends a
                coming-of-age tale with a courtroom drama, keeping readers on the edge of their seats.
            
                Owens' prose is lyrical and evocative, painting a vivid picture of the marsh's beauty and the harsh
                realities of Kya's life. Where the Crawdads Sing is a poignant exploration of loneliness, resilience, and
                the indomitable spirit of a young woman against the backdrop of the untamed wilderness.`,
                genre: 'Fiction',
                origineletaal: 'English',
                publiceerdatum: new Date('2018-08-14'),
                schrijver: {
                    id: '1',
                    schrijvernaam: 'Delia Owens',
                    geboortedatum: new Date('1949-05-25'),
                    bio: 'Delia Owens is an American author and zoologist. She is best known for her debut novel, Where the Crawdads Sing, which became a bestseller.',
                    geboorteplaats: 'Thomasville, Georgia, USA',
                    moedertaal: 'English',
                },
                paginas: 384,
            },
            {
                id: '2',
                cover: 'https://m.media-amazon.com/images/I/81NwOj14S6L._AC_UF1000,1000_QL80_.jpg',
                titel: 'Educated',
                beschrijving: `Educated is a powerful memoir by Tara Westover that recounts her journey from growing up in
                a strict and abusive household in rural Idaho to earning a PhD from the University of Cambridge. Tara's
                quest for knowledge and self-discovery takes her through a challenging path where she faces the
                complexities of family loyalty and the pursuit of education.
            
                Westover's narrative is both heartbreaking and inspiring, as she grapples with the contradictions
                between her family's beliefs and the outside world. The book explores themes of resilience, the
                transformative power of education, and the struggle to break free from the constraints of one's
                upbringing.
            
                Educated is a compelling and thought-provoking memoir that raises questions about the nature of
                identity, the importance of education, and the lengths one can go to overcome adversity.`,
                genre: 'Biography',
                origineletaal: 'English',
                publiceerdatum: new Date('2018-02-20'),
                schrijver: {
                    id: '2',
                    schrijvernaam: 'Tara Westover',
                    geboortedatum: new Date('1986-09-27'),
                    bio: 'Tara Westover is an American author known for her memoir Educated. She was born in Clifton, Idaho, and her journey from a strict household to earning a PhD is detailed in her book.',
                    geboorteplaats: 'Clifton, Idaho, USA',
                    moedertaal: 'English',
                  },
                paginas: 352,
            },
            {
                id: '3',
                cover: 'https://m.media-amazon.com/images/I/81K3WBwcGRL._AC_UF1000,1000_QL80_.jpg',
                titel: "The Great Adventure",
                beschrijving: "An exciting journey into the unknown.",
                genre: "Adventure",
                origineletaal: "English",
                publiceerdatum: new Date("2023-01-01"),
                schrijver: {
                    id: '3',
                    schrijvernaam: 'John Doe',
                    geboortedatum: new Date('1970-01-01'),
                    bio: 'John Doe is a pseudonymous author known for The Great Adventure. Not much is known about the author as they prefer to keep their identity a secret.',
                    geboorteplaats: 'Unknown',
                    moedertaal: 'English',
                  },
                paginas: 300,
            },
                {
                    id: '4',
                    cover: 'https://media.s-bol.com/NKEEmRjE7A66/g7BW59/544x840.jpg',
                    titel: 'The Silent Patient',
                    beschrijving: 'A psychological thriller that will keep you guessing.',
                    genre: 'Thriller',
                    origineletaal: 'English',
                    publiceerdatum: new Date('2019-02-05'),
                    schrijver: {
                        id: '4',
                        schrijvernaam: 'Alex Michaelides',
                        geboortedatum: new Date('Unknown'),
                        bio: 'Alex Michaelides is a British-Cypriot author and screenwriter. He is best known for his psychological thriller, The Silent Patient.',
                        geboorteplaats: 'Unknown',
                        moedertaal: 'English',
                      },
                    paginas: 336,
                },
            {
                id: '5',
                cover: 'https://media.s-bol.com/5VQqwpx4OMPZ/1Wk51OG/534x840.jpg',
                titel: 'The Vanishing Half',
                beschrijving: `The Vanishing Half is a thought-provoking novel by Brit Bennett that delves into themes of
                identity, race, and family. The story revolves around the Vignes sisters, Stella and Desiree, who
                grew up in a small, predominantly Black town. The novel takes an unexpected turn when the sisters
                choose different paths in life, with Stella passing as white and Desiree returning to her roots.

                Bennett's narrative explores the impact of the sisters' choices on their lives and the lives of
                those around them. The novel spans decades, offering a rich tapestry of characters and their
                interconnected stories. The Vanishing Half is a compelling exploration of the complexities of
                identity and the enduring bonds that tie us to our past.`,
                genre: 'Historical Fiction',
                origineletaal: 'English',
                publiceerdatum: new Date('2020-06-02'),
                schrijver:           {
                    id: '5',
                    schrijvernaam: 'Brit Bennett',
                    geboortedatum: new Date('1989-06-24'),
                    bio: 'Brit Bennett is an American author known for her novels The Mothers and The Vanishing Half. She explores themes of identity, race, and family in her works.',
                    geboorteplaats: 'Los Angeles, California, USA',
                    moedertaal: 'English',
                  },
                paginas: 352,
            },
            {
                id: '6',
                cover: 'https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF894,1000_QL80_.jpg',
                titel: 'Sapiens: A Brief History of Humankind',
                beschrijving: `Sapiens: A Brief History of Humankind by Yuval Noah Harari is a captivating journey
                through the history of humanity. Harari explores the evolution of Homo sapiens from ancient
                times to the present, examining key revolutions that shaped human societies, including the
                Cognitive Revolution, Agricultural Revolution, and Scientific Revolution.

                The book challenges conventional wisdom and prompts readers to rethink their understanding of
                history and the forces that have shaped human culture. Harari's narrative is both informative and
                thought-provoking, raising questions about the impact of technology, the formation of empires,
                and the future of our species.

                Sapiens is a must-read for those interested in a comprehensive and engaging overview of human
                history that transcends traditional boundaries.`,
                genre: 'History',
                origineletaal: 'English',
                publiceerdatum: new Date('2014-02-10'),
                schrijver:           {
                    id: '6',
                    schrijvernaam: 'Yuval Noah Harari',
                    geboortedatum: new Date('1976-02-24'),
                    bio: 'Yuval Noah Harari is an Israeli historian and professor. He is best known for his book Sapiens: A Brief History of Humankind, which explores the evolution of humanity.',
                    geboorteplaats: 'Haifa, Israel',
                    moedertaal: 'Hebrew',
                  },
                paginas: 464,
            },
            {
                id: '7',
                cover: 'https://m.media-amazon.com/images/I/71jqpBOycFL._AC_UF894,1000_QL80_.jpg',
                titel: 'The Night Circus',
                beschrijving: `The Night Circus by Erin Morgenstern is a magical tale that transports readers to
                a world of enchantment and wonder. The story revolves around a mysterious competition between
                two illusionists, Celia and Marco, who are bound by a destiny beyond their control.

                Set within the confines of the enchanting Night Circus, the novel weaves a tapestry of
                extraordinary feats and magical performances. As the competition unfolds, the boundaries between
                reality and illusion blur, creating a mesmerizing and immersive experience for both the characters
                and the readers.

                Morgenstern's lyrical prose and imaginative storytelling make The Night Circus a spellbinding
                journey into a realm of dreams and illusions, where the line between fantasy and reality is
                beautifully blurred.`,
                genre: 'Fantasy',
                origineletaal: 'English',
                publiceerdatum: new Date('2011-09-13'),
                schrijver:           {
                    id: '7',
                    schrijvernaam: 'Erin Morgenstern',
                    geboortedatum: new Date('1978-07-08'),
                    bio: 'Erin Morgenstern is an American author and multimedia artist. She gained fame with her novel The Night Circus, a magical tale set in an enchanting world.',
                    geboorteplaats: 'Marshfield, Massachusetts, USA',
                    moedertaal: 'English',
                  },
                paginas: 512,
            },
            {
                id: '8',
                cover: 'https://upload.wikimedia.org/wikipedia/en/e/eb/The_goldfinch_by_donna_tart.png',
                titel: 'The Goldfinch',
                beschrijving: 'A novel about a young boy whose life changes after a tragic event.',
                genre: 'Contemporary Fiction',
                origineletaal: 'English',
                publiceerdatum: new Date('2013-10-22'),
                schrijver:           {
                    id: '8',
                    schrijvernaam: 'Donna Tartt',
                    geboortedatum: new Date('1963-12-23'),
                    bio: 'Donna Tartt is an American author and winner of the Pulitzer Prize for Fiction. She is known for her novels, including The Goldfinch, which explores the life of a young boy after a tragic event.',
                    geboorteplaats: 'Greenwood, Mississippi, USA',
                    moedertaal: 'English',
                  },
                paginas: 771,
            },
        
        {
            id: '9',
            cover: 'https://images-na.ssl-images-amazon.com/images/I/91U3gvhFNuL._AC_UL600_SR600,600_.jpg',
            titel: "Mystery of the Missing Code",
            beschrijving: "A gripping tale of intrigue and suspense.",
            genre: "Mystery",
            origineletaal: "English",
            publiceerdatum: new Date("2023-02-15"),
            schrijver:           {
                id: '9',
                schrijvernaam: 'Jane Smith',
                geboortedatum: new Date('1985-04-10'),
                bio: 'Jane Smith is a mystery author known for her gripping tales of intrigue and suspense. The Mystery of the Missing Code is one of her notable works.',
                geboorteplaats: 'Unknown',
                moedertaal: 'English',
              },
            paginas: 250,
        },
        {
            id: '10',
            cover: 'https://cf.geekdo-images.com/A7IOpPt-lHrMYsbRmxXWdQ__itemrep/img/jI1OdHfT1AbmN-AU7zl241CDcm4=/fit-in/246x300/filters:strip_icc()/pic6177962.jpg',
            titel: "Fantasy Realm",
            beschrijving: "Immerse yourself in a world of magic and fantasy.",
            genre: "Fantasy",
            origineletaal: "Elvish",
            publiceerdatum: new Date("2023-03-30"),
            schrijver:           {
                id: '10',
                schrijvernaam: 'Fantasy Author',
                geboortedatum: new Date('Unknown'),
                bio: 'Fantasy Author is a pseudonymous writer known for creating immersive worlds of magic and fantasy. Fantasy Realm is one of the captivating tales from this author.',
                geboorteplaats: 'Unknown',
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
        const nextId = String(this.books$.value.length);
        const newBook = { ...book, id: nextId };
    
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

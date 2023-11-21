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
            titel: "The Great Adventure",
            isbn: "978-1234567890",
            beschrijving: "An exciting journey into the unknown.",
            genre: "Adventure",
            origineletaal: "English",
            publiceerdatum: new Date("2023-01-01"),
            schrijver: "John Doe",
            paginas: 300,
        },
        {
            id: '2',
            titel: "Mystery of the Missing Code",
            isbn: "978-0987654321",
            beschrijving: "A gripping tale of intrigue and suspense.",
            genre: "Mystery",
            origineletaal: "English",
            publiceerdatum: new Date("2023-02-15"),
            schrijver: "Jane Smith",
            paginas: 250,
        },
        {
            id: '3',
            titel: "Fantasy Realm",
            isbn: "978-5432109876",
            beschrijving: "Immerse yourself in a world of magic and fantasy.",
            genre: "Fantasy",
            origineletaal: "Elvish",
            publiceerdatum: new Date("2023-03-30"),
            schrijver: "Fantasy Author",
            paginas: 400,
        },
    ]);
    

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

    /**
     * Update the arg signature to match the DTO, but keep the
     * return signature - we still want to respond with the complete
     * object
     */
    create(book: Pick<IBook, 'titel' | 'isbn'>): IBook {
        Logger.log('create', this.TAG);
        const current = this.books$.value;

        // Use the incoming data, a randomized ID, and a default value of `false` to create the new to-do
        
        const newBook: IBook = {
            ...book,
            id: `book-${Math.floor(Math.random() * 10000)}`,
            titel: 'Somewhere over the rainbow',
            isbn: "75839397920",
            beschrijving: "Dit is een boek",
            genre: "avontuur",
            origineletaal: "Nederlands",
            publiceerdatum: new Date(),
            schrijver: "me",
            paginas: 1267,
        };
        this.books$.next([...current, newBook]);
        return newBook;
    }
}

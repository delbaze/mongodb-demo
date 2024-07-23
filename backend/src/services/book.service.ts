import { Repository } from "typeorm";
import datasource from "../lib/datasource";
import Book, { InputCreateBook } from "../entities/book.entity";
import { LogService } from "./log.service";

export default class BookService {
  db: Repository<Book>;
  log: LogService;
  constructor() {
    this.db = datasource.getRepository(Book);
    this.log = new LogService();
  }

  async findBook(id: string) {
    const book = await this.db.findOneBy({ id });

    if (!book) {
      throw new Error("Ce livre n'existe pas");
    }
    return book;
  }

  async listBooks() {
    this.log.addToLog({
      message: "Demande de la liste des livres",
      infos: { date: Date.now() },
    });
    return this.db.find();
  }

  async createBook({ title }: InputCreateBook) {
    const newBook = this.db.create({ title });
    return await this.db.save(newBook);
  }
  async deleteBook(id: string) {
    const book = (await this.findBook(id)) as Book;
    await this.db.remove(book);
    return { ...book, id };
  }
}

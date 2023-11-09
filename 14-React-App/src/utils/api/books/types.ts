export interface IBook {
  id: number;
  title: string;
  featured: boolean;
  author: string;
  isbn: string;
  category: string;
  description: string;
  cover_image: string;
}

export type BookContextType = {
  bookItems: IBook[];
};

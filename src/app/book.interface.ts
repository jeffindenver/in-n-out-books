/**
 * Title: book.interface.ts
 * Author: Professor Krasso
 * Modified by: Jeff Shepherd
 * Date: 8/5/2020
 * Description: book interface
 */

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number
}

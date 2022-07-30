//import Cheerio from "cheerio";
import { Article } from "@typedefs/custom.type";

interface page {
  name: string;
  url:string;
}

export class GenericPage implements page {
  public name: string;
  public url:string;
  //function to parse html based on personal structure
  extractData($: cheerio.Root): Article[] {
    const articles: Article[] = [];
    return articles;
  }
}

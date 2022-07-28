import { gethtml } from "@service/request.serv";
import Cheerio from "cheerio";
import { GenericPage } from "@typedefs/generic.type";

export default class Scraper {
  pages: GenericPage[];
  constructor(pages: GenericPage[]) {
    this.pages = pages;
  }

  public async result(page: GenericPage) {
    console.log("Fetching html...");

    const res = await gethtml(page.url);

    const $ = Cheerio.load(res);

    const data = page.extractData($);

    return data;
  }

  public async handler() {
    for (const page of this.pages) {
      const data = await this.result(page);
      /* console.log(`Site: ${page.name} \n\n  ${data}`); */
      console.log(data);
    }
  }
}

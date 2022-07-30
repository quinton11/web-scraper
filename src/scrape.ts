import { gethtml } from "@service/request.serv";
import Cheerio from "cheerio";
import { logger } from "@utils/logger";
import { Page } from "@typedefs/custom.type";
import { Article } from "@typedefs/custom.type";

export default class Scraper {
  pages: Page[];

  public async result(page: Page) {
    console.log(`Fetching ${page.name} html...`);

    const res = await gethtml(page.url);

    const $ = Cheerio.load(res);

    const data = this.extractData($, page);

    return data;
  }

  public async handler(pages: Page[]) {
    //
    this.getPages(pages);

    for (const page of this.pages) {
      const data = await this.result(page);

      logger.info(data);
    }
  }

  public extractData($: cheerio.Root, page: Page) {
    const articles: Article[] = [];

    $(page.dbase).each((index, obj) => {
      const title = $(obj).find(page.dtitle).eq(0).text();
      const url = $(obj).find(page.durl).attr("href");
      const content = $(obj).find(page.dcontent).eq(0).text();
      articles.push({ title, url, content });
    });

    return articles;
  }

  public getPages(pages: Page[]) {
    this.pages = pages;
  }
}

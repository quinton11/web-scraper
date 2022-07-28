import { Article } from "@typedefs/article.type";
import { GenericPage } from "@typedefs/generic.type";

export class YComb extends GenericPage {
  name: string = "Y-Combinator";
  url: string = "https://news.ycombinator.com";

  public extractData($: cheerio.Root): Article[] {
    const articles: Article[] = [];
    //let sum: number = 0;

    //HTML Parsing based on YCombinator Page Structure

    $(".itemlist .athing").each((index, obj) => {
      const title = $(obj).find(".titlelink").eq(0).text();
      const url = $(obj).find(".titlelink").attr("href");
      const content = "";
      articles.push({ title, url, content });
      //sum += 1;
    });
    //console.log(sum)
    return articles;
  }
}

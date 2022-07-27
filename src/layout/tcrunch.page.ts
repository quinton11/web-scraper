import { Article } from "@typedefs/article.type";
import { GenericPage } from "@typedefs/generic.type";

export class TCPage extends GenericPage {
  name: string = "Tech-Crunch";
  url: string = "https://techcrunch.com";
  public extractData($: cheerio.Root): Article[] {
    const articles: Article[] = [];

    //Based on TechCrunch layout
    $(
      ".river.river--homepage > .post-block.post-block--image.post-block--unread"
    ).each((index, obj) => {
      //pick title
      const title = $(obj).find(".post-block__title__link").eq(0).text();
      //Links
      const url = $(obj).find(".post-block__title__link").attr("href");
      //content
      const content = $(obj).find(".post-block__content").text();

      articles.push({ url, title, content });
    });

    return articles;
  }
}

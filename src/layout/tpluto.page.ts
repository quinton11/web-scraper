import { Article } from "@typedefs/article.type";
import { GenericPage } from "@typedefs/generic.type";

export class Tpluto extends GenericPage {
  public name: string = "Tech-Pluto";
  public url: string = "https://www.techpluto.com/category/resources/";

  public extractData($: cheerio.Root): Article[] {
    const articles: Article[] = [];

    $(".block-content .l-post.grid-base-post.grid-post").each((index, obj) => {
      const title = $(obj).find(".content .is-title.post-title a").eq(0).text();
      /* console.log(title); */

      const url = $(obj).find(".content .is-title.post-title a").attr("href");
      const content = $(obj).find(".content .excerpt p").eq(0).text();

      articles.push({ title, url, content });
    });

    return articles;
  }
}

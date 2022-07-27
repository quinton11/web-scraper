import Cheerio from "cheerio";
import { Article } from "@typedefs/article.type";

export const extractTC = (html: string) => {
  //
  const $ = Cheerio.load(html);

  const articles: Article[] = [];
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
};

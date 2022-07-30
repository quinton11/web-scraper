import { Page } from "@typedefs/custom.type";

//Dummy data
const tcrunch: Page = {
  name: "Tech-Crunch",
  url: "https://techcrunch.com",
  dbase:
    ".river.river--homepage > .post-block.post-block--image.post-block--unread",
  dtitle: ".post-block__title__link",
  durl: ".post-block__title__link",
  dcontent: ".post-block__content",
};
const tpluto: Page = {
  name: "Tech-Pluto",
  url: "https://www.techpluto.com/category/resources/",
  dbase: ".block-content .l-post.grid-base-post.grid-post",
  dtitle: ".content .is-title.post-title a",
  durl: ".content .is-title.post-title a",
  dcontent: ".content .excerpt p",
};
const ycomb: Page = {
  name: "Y-Combinator",
  url: "https://news.ycombinator.com",
  dbase: ".itemlist .athing",
  dtitle: ".titlelink",
  durl: ".titlelink",
  dcontent: "",
};

export const getdummydata = (): Page[] => {
  const pages: Page[] = [tcrunch, tpluto, ycomb];
  return pages;
};

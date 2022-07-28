import { TCPage } from "@layout/tcrunch.page";
import { Tpluto } from "@layout/tpluto.page";
import { YComb } from "@layout/ycomb.page";
import Scraper from "@scrape";

const scraper = new Scraper([new TCPage(), new YComb(), new Tpluto()]);

scraper.handler();

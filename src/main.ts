import { Page } from "@typedefs/custom.type";
import { getdummydata } from "@utils/dummy";
import Scraper from "@scrape";

const scraper = new Scraper();
const dummy: Page[] = getdummydata();

scraper.handler(dummy);

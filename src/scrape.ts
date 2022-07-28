import { gethtml } from "@service/request.serv";
import Cheerio from "cheerio";
import { extractTC } from "@utils/extract.tc";
import { TCPage } from "@layout/tcrunch.page";
import { YComb } from "@layout/ycomb.page";
import { GenericPage } from "@typedefs/generic.type";

//Pass in article to scraper
//Scraper Returns data and logs it

//Make request to site for html obj with service
//Get html response and pass it to cheerio parsing function
export default class Scraper {
  tcp: GenericPage;
  ycb: GenericPage
  constructor() {
    this.tcp = new TCPage();
    this.ycb = new YComb();
  }

  public async result() {
    console.log("Fetching html...");

    const res = await gethtml(this.ycb.url);
    //console.log(res)
    const $ = Cheerio.load(res);

    const data = this.ycb.extractData($);

    console.log(data);
  }
}


/*
    - Make request for html
    - Pass it to cheerio to get Element
    - Extract relevant data from Element
        - Each page has different structure
        - For each page construct extraction layout
        - Each page should have a title and function
          defining the extraction of its data based on
          its structure 
*/

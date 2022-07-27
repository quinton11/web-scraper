import { gethtml } from "@service/request.serv";
import Cheerio from "cheerio";
import { extractTC } from "@utils/extract.tc";
import { TCPage } from "@layout/tcrunch.page";

//Pass in article to scraper
//Scraper Returns data and logs it

//Make request to site for html obj with service
//Get html response and pass it to cheerio parsing function
export default class Scraper {
  tcp: TCPage;
  constructor() {
    this.tcp = new TCPage();
  }

  public async result() {
    console.log("Fetching html...");

    const res = await gethtml(this.tcp.url);

    const $ = Cheerio.load(res);

    const data = this.tcp.extractData($);

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

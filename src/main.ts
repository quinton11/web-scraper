import { gethtml } from "@service/request.serv";
import Cheerio from "cheerio";
import { extractTC } from "@utils/extract.tc";

//Pass in article to scraper
//Scraper Returns data and logs it

//Make request to site for html obj with service
//Get html response and pass it to cheerio parsing function

const url = "https://techcrunch.com";
//const result = gethtml(url);
const result = async (url: string) => {
  console.log("Fetching html...");
  const res = await gethtml(url);
  //const $ = Cheerio.load(res)
  const sum = extractTC(res.data);
  console.log(sum);

  console.log(sum[0].title);
};

result(url);

import axios from "axios";

export const gethtml = async (url: string) => {
  //Make get request
  try {
    const html = await axios.get(url);
    return html.data;
  } catch (err) {
    let errmessage = "Something happened😢";
    if (err instanceof Error) {
      errmessage = err.message;
    }
    console.log(errmessage);
    return err;
  }
};

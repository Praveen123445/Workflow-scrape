import { ExecutionEnvironment } from "@/types/executor";
import { ExtractTextFromElementTask } from "../task/ExtractTextFromElementTask";
import * as cheerio from "cheerio";
import { error } from "console";
export async function ExtractTextFromElementExecutor(
    environment : ExecutionEnvironment<typeof ExtractTextFromElementTask>
): Promise<boolean> {
  try {
    const selector = environment.getInput("Selector");
    if (!selector){
      environment.log.error("selector is not defined");
      return false;
    }
    const html = environment.getInput("Html");
    if (!html) {
      environment.log.error("html not defined");
      return false;
    }

    const $ = cheerio.load(html);
    const element = $(selector);

    if (!element) {
      environment.log.error("element not found");
      return false;
    }

    const extractedText = $.text(element);
    if (!extractedText) {
      environment.log.error("Element has no text");
      return false;
    }
    
    environment.setOutput("Extracted text", extractedText);
    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}

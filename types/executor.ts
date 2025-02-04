import { Browser } from "puppeteer";

export type Environment = {
    browser?: Browser;
    //Phases with phaseId as key
  phases: Record<
    string, //key: phaseId
    {
      inputs: Record<string, string>;
      outputs: Record<string, string>;
    }
  >;
};

import { TaskType } from "@/types/task.js";
import { LaunchBrowserTask } from "./LaunchBrowser";
import { PageToHtmlTask } from "./PageToHtml";
import { WorkflowTask } from "@/types/workflow.js";
import { ExtractTextFromElementTask } from "./ExtractTextFromElementTask";

type Registry = {
    [K in TaskType]: WorkflowTask
}
export const TaskRegistry: Registry = {
    LAUNCH_BROWSER: LaunchBrowserTask,
    PAGE_TO_HTML: PageToHtmlTask,
    EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementTask,
}
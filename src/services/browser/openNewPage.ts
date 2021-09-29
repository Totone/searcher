import { computeLink } from "./computeLink";
import { openTab } from "./openTab";

export const openNewPage: Function = (
    url: string,
    input: string|undefined = undefined
): void => {
    const link: string = computeLink(url, input);
    openTab(link);
};
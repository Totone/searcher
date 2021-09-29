import DOCS_LIST from "_config/buttons_lists/DOCS_LIST.json";
import SEARCH_ENGINES_LIST from "_config/buttons_lists/SEARCH_ENGINES_LIST.json";

export interface ButtonData {
    name: string;
    url: string;
};

export const getButtonsList: Function = (
    isForDocs: boolean
): ButtonData[] => isForDocs ? [...DOCS_LIST] : [...SEARCH_ENGINES_LIST];
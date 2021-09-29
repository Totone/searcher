import INPUT_FLAG from "_config/INPUT_FLAG.json";

export const computeLink = (
    url: string, 
    input: string|undefined = undefined
): string => input === undefined ? url : url.replace(INPUT_FLAG, input);
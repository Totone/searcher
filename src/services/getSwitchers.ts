import SWITCHERS from "_config/SWITCHERS.json";
type Switcher = typeof SWITCHERS[0];
export const getSwitchers = (): Switcher[] => [...SWITCHERS];
import { createContext } from "react";
import { initialValue } from "./initialValue";
import { InputContextType } from "./types";

export const InputContext = createContext<InputContextType>(initialValue);
import { useState, FC } from "react";
import { InputContext } from "./InputContext";
import { initialValue } from "./initialValue";

export const InputProvider: FC = ({ children }) => {
    const [value, setValue] = useState<string>(initialValue.value);
    const update: Function = (updated: string): void => setValue(updated);
    const reset: Function = (): void => setValue(initialValue.value);

    return (
        <InputContext.Provider value={{ value, update, reset }}>
            { children }
        </InputContext.Provider>
    );
};
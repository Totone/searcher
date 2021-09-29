import { useContext, useMemo } from "react";
import { InputContext } from "./InputContext";

export const useInput = () => {
    const {value, update, reset} = useContext(InputContext);
    const output = useMemo(
        () => ({
            value, 
            update, 
            reset,
        }),
        [reset, update, value]
    );
    return output;
};
import { FC, ReactElement } from "react";
import { Input as AntdInput } from "antd";
import { useInput } from "contexts/input";

export const Input: FC = (): ReactElement => {
    const { value, update } = useInput();
    return (
        <AntdInput
            autoFocus
            value={value}
            onChange={(e) => update(e.target.value)}
            //FIXME: Find a better way to get focus
            onBlur={(e) => setTimeout(()=> e.target.focus(), 500)}
        />
    );
};
import { FC, ReactElement } from "react"
import { Switch } from "antd";
import { SwitchChangeEventHandler } from "antd/lib/switch";

export const ScreenSwitcher: FC<{
    status: boolean;
    updateStatus: Function
}> = ({ status, updateStatus }): ReactElement => {
    const handleChange: SwitchChangeEventHandler = () => updateStatus(!status);
    return (
        <article>
            <Switch checked={status} onChange={handleChange} /><br/>
            <span>{status ? "Screenpad":"Desktop"} mode</span>
        </article>
    );
};
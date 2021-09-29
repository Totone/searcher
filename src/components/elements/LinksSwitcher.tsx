import { Button } from "antd";
import { CSSProperties, FC, MouseEventHandler } from "react";

export const LinksSwitcher: FC<{
    label: string;
    onClick: MouseEventHandler<HTMLElement>;
    isSelected: boolean;
}> = ({ label, onClick, isSelected }) => {
    const style: CSSProperties = {
        margin: "0 3%",
        padding: "0",
        flex: "1 0 auto",
    };

    return (
        <Button 
            style={style} 
            onClick={onClick} 
            type={isSelected ? "primary":"default"}
        >
            { label }
        </Button>
    );
};
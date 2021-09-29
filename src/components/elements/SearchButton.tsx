import { FC, ReactElement, MouseEventHandler, CSSProperties } from "react";
import { Button, Col } from "antd";
import { openNewPage } from "services/browser";
import { useInput } from "contexts/input";

const CST = {
    eltsPerLineOnSmallScreens: 2,
};

export const SearchButton: FC<{
    label: string;
    url: string;
    span: number;
    isDocButton: boolean;
    hGutter: number;
}> = ({ label, url, span, isDocButton, hGutter }): ReactElement => {
    const { value, reset } = useInput();
    const handleClickOnButton: MouseEventHandler<HTMLButtonElement> = () => {
        openNewPage(url, isDocButton ? undefined : value);
        reset();
    };
    const getSpan = (isSmallScreen: boolean = false): {span: number} => ({
        span: isSmallScreen ? Math.round(hGutter / CST.eltsPerLineOnSmallScreens)
        : span
    });
    const btnStyle: CSSProperties = {
        width: "100%",
        minWidth: "160px",
        height: "20vh",
        maxHeight: "140px",
        borderRadius: "5px",
        whiteSpace: "pre-line",
        fontWeight: "bold",
    };

    return (
        <Col xs={getSpan(true)} sm={getSpan()}>
            <Button type="default" onClick={handleClickOnButton} style={btnStyle}>
                {label}
            </Button>
        </Col>
    );
};
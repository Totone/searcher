import { FC, ReactElement, useEffect, useState } from "react";
import { Row } from "antd";
import { getButtonsList, ButtonData } from "services/getButtonsList";
import { SearchButton } from "components/elements/SearchButton";

const CST = {
    elts: {
        docs: 3,
        engines: 4,
    },
};

export const ButtonsList: FC<{
    hGutter?: number;
    vGutter?: number;
    forDocs?: boolean;
}> = ({ hGutter = 24, vGutter = 24, forDocs = false }): ReactElement => {
    const [list, setList] = useState<ButtonData[]>([]);
    const [eltsPerLine, setEltsPerLine] = useState<number>(0);

    useEffect(
        () => {
            setList(getButtonsList(forDocs));
            setEltsPerLine(CST.elts[forDocs ? "docs" : "engines"]);
        }, [forDocs]
    );

    return (
        <Row gutter={[hGutter, vGutter]}>
            {
                list.map(
                    ({name, url}, idx) => (
                        <SearchButton
                            key={idx.toString()}
                            label={name}
                            url={url}
                            span={Math.round(hGutter / eltsPerLine)}
                            isDocButton={forDocs}
                            hGutter={hGutter}
                        />
                    )
                )
            }
        </Row>
    );
};
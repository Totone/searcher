import { FC, ReactElement } from "react";
import { InputProvider } from "contexts/input";
import "antd/dist/antd.css";

import { AppLayout } from "components/layouts/AppLayout";

export const App: FC = (): ReactElement => {
	return (
		<InputProvider>
			<AppLayout/>
		</InputProvider>
	);
};
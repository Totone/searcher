import { FC, ReactElement, useState, CSSProperties } from "react";
import { Input } from "components/elements/Input";
import { ButtonsList } from "components/modules/ButtonsList";
import { LinksSwitcher } from "components/elements/LinksSwitcher";
import { ScreenSwitcher } from "components/modules/ScreenSwitcher";
import { getSwitchers } from "services/getSwitchers";

export const AppLayout: FC = (): ReactElement => {
	const [isForDocs, setForDocs] = useState<boolean>(false);
	const [isScreenpadMode, setScreenpadMode] = useState<boolean>(true);
	const switchers = getSwitchers();
	const styles: {[key: string]: CSSProperties} = {
		container: {
			boxSizing: "border-box",
			width: "100vw",
			margin: "0",
			padding: "40px",
			minWidth: "320px",
			height: "100vh",
			display: "flex",
			flexDirection: isScreenpadMode ? "row":"column",
			justifyContent: "space-around",
			alignItems: "center",
			backgroundColor: "#7cabd0",
		},
		switchers: {
			margin: "2vh 0",
			display: "flex",
			justifyContent: "center"
		},
		inputSection: {
			width: "30%",
			textAlign: "center",
			margin: isScreenpadMode ? "10px": "auto"
		},
		buttonsList: {
			width: "95%"
		}
	};

	return (
		<main style={styles.container}>
			<section style={styles.inputSection}>
				<Input />
				<section style={styles.switchers}>
					{
						switchers.map(
							({label, rules}) => (
								<LinksSwitcher 
									key={label}
									label={label}
									isSelected={isForDocs === rules}
									onClick={() => setForDocs(rules)}
								/>		
							)
						)
					}
				</section>
				<ScreenSwitcher
					status={isScreenpadMode}
					updateStatus={setScreenpadMode}
				/>
			</section>
			<section style={styles.buttonsList}>
				<ButtonsList forDocs={isForDocs} />
			</section>
		</main>
	);
};
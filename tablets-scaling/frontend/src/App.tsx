import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { Header } from "./components/Layout/Header";
import { MainTabs } from "./components/Layout/MainTabs";
import { ConsoleTabs } from "./components/Layout/ConsoleTabs";

export default function App() {
	const [activeTab, setActiveTab] = useState("dashboard");
	const [activeTab2, setActiveTab2] = useState("console");

	return (
		<Grid container>
			<Grid size={{ xs: 12, md: 4 }}>
				<Container>
					<Header />
					<Box sx={{ mt: 2 }}>
						<MainTabs activeTab={activeTab} setActiveTab={setActiveTab} />
					</Box>
				</Container>
			</Grid>
			<Grid size={{ xs: 12, md: 8 }}>
				<ConsoleTabs activeTab={activeTab2} setActiveTab={setActiveTab2} />
			</Grid>
		</Grid>
	);
}

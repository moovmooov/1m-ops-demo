import { Grid2, Box, Container } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";

import { Header } from "./components/Layout/Header";
import Cluster from "./components/Dashboard/Cluster";
import Loader from "./components/Dashboard/Loader";
import { CustomTab } from "./components/Layout/CustomTab";

const TABS = [
	{
		label: "Dashboard",
		value: "dashboard",
		icon: DashboardIcon,
		component: (
			<>
				<Cluster />
				<Loader />
			</>
		),
	},
	{
		label: "Scenarios",
		value: "scenarios",
		icon: RocketLaunchIcon,
		component: <div>Scenarios Content</div>,
	},
	{
		label: "About",
		value: "about",
		icon: InfoIcon,
		component: <div>About Content</div>,
	},
] as const;

type TabValue = (typeof TABS)[number]["value"];

export default function App() {
	const [activeTab, setActiveTab] = React.useState<TabValue>("dashboard");

	const handleTabChange = (_event: React.SyntheticEvent, newValue: TabValue) => {
		setActiveTab(newValue);
	};

	return (
			<Box 
				sx={{ 
					minHeight: "100vh", 
					bgcolor: "background.default",
					display: "flex",
					flexDirection: "column" 
				}}
			>
				<Grid2 container sx={{ mt: 4, flexGrow: 1 }}>
					<Grid2 size={5}>
						<Container>
							<Header />
							
							<Box sx={{ mt: 2 }}>
								<TabContext value={activeTab}>
									<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
										<TabList
											onChange={handleTabChange}
											aria-label="Application navigation"
											sx={{ 
												width: "100%",
												"& .MuiTabs-indicator": {
													backgroundColor: "#27B6DB",
												}
											}}
											variant="fullWidth"
										>
											{TABS.map(({ label, value, icon: Icon }) => (
												<CustomTab
													key={value}
													label={label}
													value={value}
													icon={<Icon fontSize="small" />}
													iconPosition="start"
												/>
											))}
										</TabList>
									</Box>
									
									{TABS.map(({ value, component }) => (
										<TabPanel key={value} value={value} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
											{component}
										</TabPanel>
									))}
								</TabContext>
							</Box>
						</Container>
					</Grid2>
					
					<Grid2 size={7}>
						<Container>
							<Box sx={{ 
								bgcolor: "background.paper",
								borderRadius: 1,
								p: 3,
								height: "100%",
								minHeight: 400
							}}>
								Visualization Panel
							</Box>
						</Container>
					</Grid2>
				</Grid2>
			</Box>
	);
}

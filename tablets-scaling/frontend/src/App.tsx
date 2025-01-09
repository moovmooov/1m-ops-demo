import { Box, Container } from "@mui/material";
import Grid  from "@mui/material/Grid2";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import InfoIcon from "@mui/icons-material/Info";
import React, { useState } from "react";

import { Header } from "./components/Layout/Header";
import Cluster from "./components/Dashboard/Cluster";
import Loader from "./components/Dashboard/Loader";
import { CustomTab } from "./components/Layout/CustomTab";
import Scenario from "./components/Scenario";
import About from "./components/About";




export default function App() {
	const [activeTab, setActiveTab] = useState("dashboard");

	const handleTabChange = (
		_event: React.SyntheticEvent,
		newValue: string,
	) => {
		setActiveTab(newValue);
	};

	return (
		<Box
			sx={{
				minHeight: "100vh",
				bgcolor: "#F6F8FF",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Grid container spacing={2} sx={{flexGrow: 1 }}>
				<Grid size={{ xs: 12, md: 4 }}>
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
											},
										}}
										variant="fullWidth"
									>
										<CustomTab
											label="Dashboard"
											value="dashboard"
											icon={<DashboardIcon fontSize="small" />}
											iconPosition="start"
										/>
										<CustomTab
											label="Scenarios"
											value="scenarios"
											icon={<RocketLaunchIcon fontSize="small" />}
											iconPosition="start"
										/>
										<CustomTab
											label="About"
											value="about"
											icon={<InfoIcon fontSize="small" />}
											iconPosition="start"
										/>
									</TabList>
								</Box>

								<TabPanel
                  keepMounted
									value="dashboard"
									sx={{
										display: activeTab === "dashboard" ? "flex" : "none",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
										padding: { xs: 1, sm: 2 },
										gap: 2,
										width: "100%",
										height: "100%"
									}}
								>
									<Cluster />
									<Loader />
								</TabPanel>

								<TabPanel
                  keepMounted
									value="scenarios"
									sx={{
										display: activeTab === "scenarios" ? "flex" : "none",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
										padding: { xs: 1, sm: 2 },
										gap: 2,
										width: "100%",
										height: "100%"
									}}
								>
									<Scenario />
								</TabPanel>

								<TabPanel
									value="about"
									sx={{
										display: activeTab === "about" ? "flex" : "none",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center",
										padding: { xs: 1, sm: 2 },
										gap: 2,
										width: "100%",
										height: "100%"
									}}
								>
									<About />
								</TabPanel>
							</TabContext>
						</Box>
					</Container>
				</Grid>
				<Grid size={{ xs: 12, md: 8 }}>
					<Container>
						<Box
							sx={{
								bgcolor: "background.paper",
								borderRadius: 1,
								height: "100%",
								minHeight: { xs: 300, sm: 400 },
							}}
						>
							Visualization Panel
						</Box>
					</Container>
				</Grid>
			</Grid>
		</Box>
	);
}

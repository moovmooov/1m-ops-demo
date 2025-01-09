import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import InfoIcon from "@mui/icons-material/Info";
import TerminalIcon from "@mui/icons-material/Terminal";
import React, { useState } from "react";

import { Header } from "./components/Layout/Header";
import Cluster from "./components/Dashboard/Cluster";
import Loader from "./components/Dashboard/Loader";
import { CustomTab } from "./components/Layout/CustomTab";
import Scenario from "./components/Scenario";
import About from "./components/About";
import Console from "./components/Console";

export default function App() {
	const [activeTab, setActiveTab] = useState("dashboard");
	const [activeTab2, setActiveTab2] = useState("console");

	const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
		setActiveTab(newValue);
	};

	const handleTabChange2 = (_event: React.SyntheticEvent, newValue: string) => {
		setActiveTab2(newValue);
	};

	return (
		<Grid container>
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
									height: "100%",
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
									height: "100%",
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
									height: "100%",
								}}
							>
								<About />
							</TabPanel>
						</TabContext>
					</Box>
				</Container>
			</Grid>
			<Grid size={{ xs: 12, md: 8 }}>
				<Box
					sx={{
						bgcolor: "background.paper",
						borderRadius: 1,
						height: "100%",
						minHeight: { xs: 300, sm: 400 },
					}}
				>
					<TabContext value={activeTab2}>
						<Box>
							<TabList
								onChange={handleTabChange2}
								aria-label="Application navigation"
								sx={{
									"& .MuiTabs-indicator": {
										backgroundColor: "#27B6DB",
										paddingTop: "2px",
									},
									backgroundColor: "#4458A3",
									width: "100%",
								}}
							>
								<CustomTab
									label="Console"
									value="console"
									icon={<TerminalIcon fontSize="small" />}
									iconPosition="start"
									sx={{
										color: "white",
									}}
								/>
								<CustomTab
									label="Grafana"
									value="grafana"
									sx={{
										color: "white",
									}}
								/>
							</TabList>
						</Box>

						<TabPanel
							keepMounted
							value="console"
							sx={{
								padding: 0,
								height: "100%",
							}}
						>
							<Console />
						</TabPanel>
						<TabPanel
							keepMounted
							value="grafana"
							sx={{
								padding: 0,
								height: "100%",
							}}
						>
							<Box
								sx={{
									backgroundColor: "#383d57",
									height: "100%",
								}}
							></Box>
						</TabPanel>
					</TabContext>
				</Box>
			</Grid>
		</Grid>
	);
}

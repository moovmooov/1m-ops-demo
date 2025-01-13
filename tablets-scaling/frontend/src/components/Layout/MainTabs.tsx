import { Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";
import { CustomTab } from "./CustomTab";
import Cluster from "../Dashboard/Cluster";
import Loader from "../Dashboard/Loader";
import Scenario from "../Scenario";
import About from "../About";

interface MainTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export function MainTabs({ activeTab, setActiveTab }: MainTabsProps) {
  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const commonTabPanelSx = {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: { xs: 1, sm: 2 },
    gap: 2,
    width: "100%",
    height: "100%",
  };

  return (
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
        sx={{ ...commonTabPanelSx, display: activeTab === "dashboard" ? "flex" : "none" }}
      >
        <Cluster />
        <Loader />
      </TabPanel>

      <TabPanel
        keepMounted
        value="scenarios"
        sx={{ ...commonTabPanelSx, display: activeTab === "scenarios" ? "flex" : "none" }}
      >
        <Scenario />
      </TabPanel>

      <TabPanel
        value="about"
        sx={{ ...commonTabPanelSx, display: activeTab === "about" ? "flex" : "none" }}
      >
        <About />
      </TabPanel>
    </TabContext>
  );
} 
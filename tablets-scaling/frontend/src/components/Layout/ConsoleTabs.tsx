import { Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TerminalIcon from "@mui/icons-material/Terminal";
import React from "react";
import { CustomTab } from "./CustomTab";
import Console from "../Console";

interface ConsoleTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

export function ConsoleTabs({ activeTab, setActiveTab }: ConsoleTabsProps) {
  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: 1,
        height: "100%",
        minHeight: { xs: 300, sm: 400 },
      }}
    >
      <TabContext value={activeTab}>
        <Box>
          <TabList
            onChange={handleTabChange}
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
              sx={{ color: "white" }}
            />
            <CustomTab
              label="Grafana"
              value="grafana"
              sx={{ color: "white" }}
            />
          </TabList>
        </Box>

        <TabPanel
          keepMounted
          value="console"
          sx={{ padding: 0, height: "100%" }}
        >
          <Console />
        </TabPanel>
        <TabPanel
          keepMounted
          value="grafana"
          sx={{ padding: 0, height: "100%" }}
        >
          <Box sx={{ backgroundColor: "#383d57", height: "100%" }} />
        </TabPanel>
      </TabContext>
    </Box>
  );
} 
import { Box, Button } from "@mui/material";
import { PlayArrow, Stop } from "@mui/icons-material";

interface ControlPanelProps {
  onRun?: () => void;
  onStop?: () => void;
  onSave?: () => void;
  isRunning?: boolean;
}

export function ControlPanel({ onRun, onStop, onSave, isRunning }: ControlPanelProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={onRun}
          disabled={isRunning}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          Run
          <PlayArrow sx={{ fontSize: 16 }}/>
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="warning"
          onClick={onStop}
          disabled={!isRunning}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          Stop
          <Stop sx={{ fontSize: 16 }}/>
        </Button>
      </Box>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        onClick={onSave}
      >
        Save
      </Button>
    </Box>
  );
} 
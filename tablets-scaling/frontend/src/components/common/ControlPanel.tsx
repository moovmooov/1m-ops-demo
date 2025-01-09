import { Box, Button } from "@mui/material";
import { PlayArrow, Stop } from "@mui/icons-material";

interface ControlPanelProps {
	onRun?: () => void;
	onStop?: () => void;
	onSave?: () => void;
	isRunning?: boolean;
}
export function ControlPanel({
	onRun,
	onStop,
	onSave,
	isRunning,
}: ControlPanelProps) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", sm: "row" },
				justifyContent: "space-between",
				alignItems: { xs: "stretch", sm: "center" },
				width: "100%",
				mt: 4,
				gap: 2,
			}}
		>
			<Box 
				sx={{ 
					display: "flex", 
					gap: 1,
					flexDirection: { xs: "column", sm: "row" },
					width: { xs: "100%", sm: "auto" }
				}}
			>
				<Button
					variant="contained"
					color="primary"
					size="medium"
					onClick={onRun}
					disabled={isRunning}
					fullWidth={true}
					sx={{ 
						display: "flex", 
						alignItems: "center", 
						gap: 1,
						justifyContent: "center"
					}}
				>
					Run
					<PlayArrow sx={{ fontSize: 16 }} />
				</Button>
				<Button
					variant="contained"
					size="medium"
					color="warning"
					onClick={onStop}
					disabled={!isRunning}
					fullWidth={true}
					sx={{ 
						display: "flex", 
						alignItems: "center", 
						gap: 1,
						justifyContent: "center"
					}}
				>
					Stop
					<Stop sx={{ fontSize: 16 }} />
				</Button>
			</Box>
			<Button
				variant="contained"
				size="medium"
				color="primary"
				onClick={onSave}
				fullWidth={true}
				sx={{
					width: { xs: "100%", sm: "auto" }
				}}
			>
				Save
			</Button>
		</Box>
	);
}

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { ConfigSlider } from '../common/ConfigSlider';
import { ControlPanel } from '../common/ControlPanel';

interface LoaderProps {
	onSave?: (config: LoaderConfig) => void;
	onRun?: () => void;
	onStop?: () => void;
	initialReadOps?: number;
	initialWriteOps?: number;
}

interface LoaderConfig {
	readOps: number;
	writeOps: number;
	instances: number;
}

const containerStyles = {
	width: "100%",
	backgroundColor: "white",
    borderRadius: "5px",
	p: 3,
	border: "1px solid #EEEEEE"
};

function Loader({ onSave, onRun, onStop }: LoaderProps) {
	const [readOps, setReadOps] = useState(0);
	const [writeOps, setWriteOps] = useState(0);
	const [instances, setInstances] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	return (
		<Box sx={containerStyles}>
			<Typography variant="h1" fontWeight={600} fontSize={21} sx={{ mb: 2 }} color="#4458A3">
				Loader Properties
			</Typography>

			<Box sx={{ mb: 2, display: "flex", gap: 5 }}>
            <ConfigSlider
				label="Read ops/sec"
				value={readOps}
				onChange={setReadOps}
				max={10}
				unit="M"
				description="The amount of SELECT statements the cluster has to serve."
                disabled={isRunning}
			/>

			<ConfigSlider
				label="Write ops/sec"
				value={writeOps}
				onChange={setWriteOps}
				max={10}
				unit="M"
				description="The amount of INSERT/UPDATE statements the cluster has to serve."
                disabled={isRunning}
			/>
            </Box>

			<ConfigSlider
				label="Number of loader instances"
				value={instances}
				onChange={setInstances}
				max={24}
                disabled={isRunning}
			/>

			<ControlPanel
				onRun={() => {
					setIsRunning(true);
					onRun?.();
				}}
				onStop={() => {
					setIsRunning(false);
					onStop?.();
				}}
				onSave={() => onSave?.({ readOps, writeOps, instances })}
				isRunning={isRunning}
			/>
		</Box>
	);
}

export default Loader;
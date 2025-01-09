import { Box, Typography, Select, MenuItem, InputLabel } from "@mui/material";
import { useState } from "react";
import { ConfigSlider } from '../common/ConfigSlider';
import { ControlPanel } from '../common/ControlPanel';

interface ClusterProps {
	onSave?: (config: ClusterConfig) => void;
	onRun?: () => void;
	onStop?: () => void;
}

type InstanceType = 't3.small' | 't3.medium' | 't3.large';

interface ClusterConfig {
	nodes: number;
	instanceType: InstanceType;
}

const containerStyles = {
	width: "100%",
	backgroundColor: "white",
	borderRadius: "5px",
	p: 3,
	border: "1px solid #EEEEEE"
};

function Cluster({ onSave, onRun, onStop }: ClusterProps) {
	const [nodes, setNodes] = useState(0);
	const [instanceType, setInstanceType] = useState<InstanceType>('t3.small');
	const [isRunning, setIsRunning] = useState(false);

	const handleSave = () => {
		onSave?.({ nodes, instanceType });
	};

	const handleRun = () => {
		setIsRunning(true);
		onRun?.();
	};

	const handleStop = () => {
		setIsRunning(false);
		onStop?.();
	};

	return (
		<Box sx={containerStyles}>
			<Typography variant="h1" fontWeight={600} fontSize={21} sx={{ mb: 2 }} color="#4458A3">
				Cluster Properties
			</Typography>
			
            <Box sx={{ mb: 2, display: "flex", gap: 5 }}>
			<ConfigSlider
				label="Number of Nodes"
				value={nodes}
				onChange={setNodes}
				max={24}
				disabled={isRunning}
			/>
				<Box sx={{ width: "100%" } }>
                <InputLabel id="instance-type-label">Instance Type</InputLabel>
				<Select
					fullWidth
					value={instanceType}
					onChange={(e) => setInstanceType(e.target.value as InstanceType)}
					labelId="instance-type-label"
					id="instance-type-select"
					disabled={isRunning}
				>
					<MenuItem value="t3.small">t3.small</MenuItem>
					<MenuItem value="t3.medium">t3.medium</MenuItem>
					<MenuItem value="t3.large">t3.large</MenuItem>
				</Select>
                </Box>
			</Box>

			<ControlPanel
				onRun={handleRun}
				onStop={handleStop}
				onSave={handleSave}
				isRunning={isRunning}
			/>
		</Box>
	);
}

export default Cluster;

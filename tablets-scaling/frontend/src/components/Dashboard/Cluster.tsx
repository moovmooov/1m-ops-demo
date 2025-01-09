import { Box, Typography, Select, MenuItem, InputLabel } from "@mui/material";
import { useState } from "react";
import { ConfigSlider } from "../common/ConfigSlider";
import { ControlPanel } from "../common/ControlPanel";

interface ClusterProps {
	onSave?: (config: ClusterConfig) => void;
	onRun?: () => void;
	onStop?: () => void;
	initialNodes?: number;
}

type InstanceType =
	| "t2.micro"
	| "t2.small"
	| "t2.medium"
	| "t3.micro"
	| "t3.small"
	| "t3.medium";

interface ClusterConfig {
	nodes: number;
	instanceType: InstanceType;
}

const containerStyles = {
	width: "100%",
	backgroundColor: "white",
	borderRadius: "5px",
	p: 3,
	border: "1px solid #EEEEEE",
};

function Cluster({ onSave, onRun, onStop, initialNodes = 0 }: ClusterProps) {
	const [nodes, setNodes] = useState(initialNodes);
	const [instanceType, setInstanceType] = useState<InstanceType>("t2.micro");
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
			<Typography
				variant="h1"
				fontWeight={600}
				fontSize={21}
				sx={{ mb: 2 }}
				color="#4458A3"
			>
				Cluster Properties
			</Typography>

			<Box sx={{ mb: 2 }}>
				<ConfigSlider
					label="Number of Nodes"
					value={nodes}
					onChange={setNodes}
					max={24}
				/>
				<InputLabel sx={{ mb: 1, fontSize: 12 }}>Instance Type</InputLabel>
				<Select
					fullWidth
					size="small"
					value={instanceType}
					onChange={(e) => setInstanceType(e.target.value as InstanceType)}
				>
					<MenuItem value="t2.micro">t2.micro</MenuItem>
					<MenuItem value="t2.small">t2.small</MenuItem>
					<MenuItem value="t2.medium">t2.medium</MenuItem>
					<MenuItem value="t3.micro">t3.micro</MenuItem>
					<MenuItem value="t3.small">t3.small</MenuItem>
					<MenuItem value="t3.medium">t3.medium</MenuItem>
				</Select>
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

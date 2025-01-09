import { ScenarioCard } from "./ScenarioCard";
import { 
	RocketLaunch, 
	Storage, 
	Speed, 
	AddCircle, 
	RemoveCircle 
} from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const SCENARIOS = [
	{
		title: "Setup 3-node cluster",
		icon: <Storage fontSize="medium" />,
		description:
			"Initialize a resilient ScyllaDB cluster with three interconnected nodes, ready for high-performance data operations.",
	},
	{
		title: "Load sample data",
		icon: <RocketLaunch fontSize="medium" />,
		description:
			"Populate the database with predefined sample data, showcasing key-value pairs, relational mappings, or time-series metrics.",
	},
	{
		title: "Start Loader",
		icon: <Speed fontSize="medium" />,
		description:
			"Simulate real-world traffic by generating a continuous workload on the database to evaluate its performance.",
	},
	{
		title: "Scale out (add 3 nodes)",
		icon: <AddCircle fontSize="medium" />,
		description:
			"Seamlessly add three additional nodes to the cluster, enabling automatic data redistribution and increased capacity using ScyllaDB's tablet architecture.",
	},
	{
		title: "Scale in (remove 3 nodes)",
		icon: <RemoveCircle fontSize="medium" />,
		description:
			"Reduce the cluster size by removing three nodes, with ScyllaDB dynamically rebalancing data across the remaining nodes.",
	},
];

export default function Scenario() {
	const theme = useTheme();
	const [completedScenarios, setCompletedScenarios] = useState<Set<number>>(new Set());

	const handleRun = (index: number) => {
		setCompletedScenarios(prev => {
			const newSet = new Set(prev);
			newSet.add(index);
			return newSet;
		});
	};

	return (
		<Box sx={{ position: 'relative', py: 4 }}>
			<Typography 
				variant="h1" 
				fontWeight={700} 
				fontSize={24} 
				sx={{ 
					mb: 4,
					color: '#4458A3',
				}}
			>
				Tablets demo
			</Typography>
			<Box 
				component="ol" 
				sx={{ 
					listStyle: "none", 
					p: 0, 
					m: 0,
					position: 'relative',
				}}
			>
				{SCENARIOS.map((scenario, index) => (
					<Box
						component="li"
						key={scenario.title}
						sx={{
							position: "relative",
							"&::before": {
								content: `"${index + 1}"`,
								position: "absolute",
								left: "-42px",
								top: "50%",
								transform: "translateY(-50%)",
								width: "28px",
								height: "28px",
								borderRadius: "50%",
								backgroundColor: theme.palette.primary.main,
								color: "#fff",
								border: "2px solid",
								borderColor: "primary.main",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: "14px",
								fontWeight: "700",
								fontFamily: theme.typography.fontFamily,
								zIndex: 1,
								transition: 'all 0.2s ease-in-out',
							},
							"&::after": {
								content: '""',
								position: "absolute",
								left: "-28px",
								top: "50%",
								bottom: "-50%",
								width: 2,
								backgroundColor: theme.palette.primary.main,
								opacity: 0.5,
								display: index === SCENARIOS.length - 1 ? "none" : "block",
							},
							"&:hover::before": {
								transform: "translateY(-50%) scale(1.1)",
								boxShadow: '0 0 0 4px rgba(68, 88, 163, 0.1)',
							},
							ml: 5,
							mb: 3,
						}}
					>
						<ScenarioCard
							key={scenario.title}
							icon={scenario.icon}
							title={scenario.title}
							description={scenario.description}
							completed={completedScenarios.has(index)}
							onRun={() => handleRun(index)}
						/>
					</Box>
				))}
			</Box>
		</Box>
	);
}

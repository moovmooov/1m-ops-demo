import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Collapse } from "@mui/material";
import { ScenarioButton } from "./ScenarioButton";

interface ScenarioCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
	onRun: () => void;
	completed?: boolean;
}

export function ScenarioCard({
	icon,
	title,
	description,
	onRun,
	completed = false,
}: ScenarioCardProps) {
	const [isExpanded, setIsExpanded] = useState(true);

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onRun();
	};

	return (
		<Box
			onClick={() => setIsExpanded(!isExpanded)}
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "flex-start",
				p: 3,
				bgcolor: "background.paper",
				borderRadius: 2,
				border: "1px solid #C6D5E1",
				borderColor: "divider",
				cursor: "pointer",
				transition: "all 0.2s ease-in-out",
				"&:hover": {
					bgcolor: "rgba(0, 0, 0, 0.04)",
					transform: "translateY(-1px)",
					boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
				},
			}}
		>
			<Box sx={{ display: "flex", gap: 3, alignItems: "flex-start", flex: 1 }}>
				<Box sx={{ color: "primary.main", fontSize: "1.5rem" }}>{icon}</Box>
				<Box sx={{ width: "100%" }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							mb: 1,
							gap: 1,
						}}
					>
						<Typography fontSize={18} fontWeight={600} color="text.primary">
							{title}
						</Typography>
						<Box sx={{ display: "flex", gap: 1 }}>
							{completed && (
								<ScenarioButton
									variant="outlined"
									onClick={handleClick}
									label="Rerun"
								/>
							)}
							<ScenarioButton
								completed={completed}
								onClick={handleClick}
								label={completed ? "Complete" : "Run"}
							/>
						</Box>
					</Box>
					<Collapse in={isExpanded} timeout={300}>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{
								mt: 1.5,
								lineHeight: 1.6,
								opacity: 0.85,
							}}
						>
							{description}
						</Typography>
					</Collapse>
				</Box>
			</Box>
		</Box>
	);
}

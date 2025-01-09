import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface ScenarioButtonProps {
	variant?: "contained" | "outlined";
	completed?: boolean;
	onClick: (e: React.MouseEvent) => void;
	label: string;
}

export function ScenarioButton({
	variant = "contained",
	completed = false,
	onClick,
	label,
}: ScenarioButtonProps) {
	const isOutlined = variant === "outlined";

	return (
		<Button
			variant={variant}
			size="small"
			onClick={onClick}
			endIcon={
				isOutlined ? (
					<PlayArrowIcon />
				) : completed ? (
					<CheckCircleIcon />
				) : (
					<PlayArrowIcon />
				)
			}
			sx={{
				minWidth: 100,
				borderRadius: 2,
				textTransform: "none",
				px: 2,
				py: 0.75,
				fontSize: "0.875rem",
				fontWeight: 600,
				backgroundColor: isOutlined
					? "transparent"
					: completed
						? "success.main"
						: "primary.main",
				borderColor: isOutlined ? "primary.main" : "transparent",
				color: isOutlined ? "primary.main" : "#fff",
				boxShadow: "none",
				transition: "all 0.2s ease-in-out",
				"&:hover": {
					transform: "translateY(-2px)",
					boxShadow: isOutlined
						? "0 4px 8px rgba(68, 88, 163, 0.2)"
						: completed
							? "0 4px 8px rgba(76, 175, 80, 0.2)"
							: "0 4px 8px rgba(68, 88, 163, 0.2)",
					borderColor: isOutlined ? "primary.dark" : "transparent",
					backgroundColor: isOutlined
						? "rgba(68, 88, 163, 0.04)"
						: completed
							? "success.dark"
							: "primary.dark",
				},
				"&:active": {
					transform: "translateY(0)",
					boxShadow: "none",
				},
				"& .MuiButton-endIcon": {
					ml: 1,
					"& svg": {
						fontSize: "1.2rem",
					},
				},
			}}
		>
			{label}
		</Button>
	);
}

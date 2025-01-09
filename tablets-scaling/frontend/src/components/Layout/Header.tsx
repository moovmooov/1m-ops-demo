import { Box, Typography } from "@mui/material";
import scyllaLogo from "../../assets/scylla-logo.svg?url";

export function Header() {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				gap: 2,
				padding: { xs: 1, sm: 2 },
			}}
		>
			<img src={scyllaLogo} alt="Scylla Logo" />
			<Typography variant="h1" fontSize={27} fontWeight={600} color="#4458A3">
				Tech Demo
			</Typography>
		</Box>
	);
}

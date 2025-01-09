import { Box, Typography } from "@mui/material";
import scyllaCloud from "../../assets/scylladb-mascot-cloud.svg?url";

function About() {
	return (
		<Box
			sx={{
				p: { xs: 2, sm: 3 },
				backgroundColor: "white",
				borderRadius: "5px",
				border: "1px solid #E7EBF7",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				gap: { xs: 1, sm: 2 },
				width: "100%",
			}}
		>
			<img src={scyllaCloud} alt="Scylla Cloud" style={{ maxWidth: "100%", height: "auto" }} />
			<Typography variant="h1" fontWeight={600} fontSize={{ xs: 18, sm: 21 }} sx={{ mb: { xs: 1, sm: 2 } }} color="#4458A3">
				1 million ops/sec <br /> ScyllaDB demos with Terraform
			</Typography>
			<Typography variant="body1" fontWeight={300} fontSize={{ xs: 16, sm: 20 }} sx={{ mb: { xs: 1, sm: 2 } }}>
				Test and benchmark ScyllaDB under a 1 million operations per second
				workload.
			</Typography>
		</Box>
	);
}

export default About;

import { Box } from "@mui/material";

function Console() {
	const [output, setOutput] = useState("");
	return (
		<Box
			component="pre"
			sx={{
				backgroundColor: "#383d57",
				height: "100%",
				padding: 2,
				marginTop: 0,
				color: "white",
				fontFamily: "Roboto Mono",
				fontWeight: "300",
				fontSize: "14px",
			}}
		>
			[Welcome to ScyllaDB Tech Demo]
		</Box>
	);
}

export default Console;

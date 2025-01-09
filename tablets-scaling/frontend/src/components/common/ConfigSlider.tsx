import { Box, Typography, Slider, Input } from "@mui/material";

interface ConfigSliderProps {
	label: string;
	value: number;
	onChange: (value: number) => void;
	max: number;
	description?: string;
	unit?: string;
	disabled?: boolean;
}

export function ConfigSlider({
	label,
	value,
	onChange,
	disabled,
	max,
	description,
	unit,
}: ConfigSliderProps) {
	const handleChange = (_event: Event, newValue: number | number[]) => {
		onChange(newValue as number);
	};
	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Typography
					fontSize={14}
					component="label"
					htmlFor={`${label}-slider`}
					color="#4B546F"
				>
					{label}
				</Typography>
				<Input
					value={value}
					onChange={(event) => onChange(Number(event.target.value))}
					type="number"
					disabled={disabled}
					inputProps={{
						min: 0,
						max: max,
						type: "number",
						"aria-labelledby": "input-slider",
					}}
					sx={{
						width: 60,
						"& input": {
							textAlign: "center",
						},
					}}
				/>
			</Box>
			<Box sx={{ width: "100%" }}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						mb: 1,
					}}
				>
					<Slider
						id={`${label}-slider`}
						size="medium"
						disabled={disabled}
						color="primary"
						marks
						max={max}
						value={value}
						onChange={handleChange}
						aria-label={label}
					/>
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						mb: 1,
					}}
				>
					<Typography variant="body2" fontSize={14} color="#4B546F">
						0
					</Typography>
					<Typography variant="body2" fontSize={14} color="#4B546F">
						{unit ? `${max} ${unit}` : max}
					</Typography>
				</Box>
				{description && (
					<Typography variant="caption" color="#4B546F">
						{description}
					</Typography>
				)}
			</Box>
		</Box>
	);
}

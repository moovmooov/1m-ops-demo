import { Box, Typography, Slider } from "@mui/material";

interface ConfigSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  max: number;
  description?: string;
  unit?: string;
  disabled?: boolean;
}

export function ConfigSlider({ label, value, onChange, disabled, max, description, unit }: ConfigSliderProps) {
  const handleChange = (_event: Event, newValue: number | number[]) => {
    onChange(newValue as number);
  };

  return (
    <Box sx={{ width: "100%", mb: 2 }}>
      <Typography fontSize={12} component="label" htmlFor={`${label}-slider`} color="#4B546F">
        {label}
      </Typography>
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
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
        <Typography variant="body2" fontSize={14} color="#4B546F">0</Typography>
        <Typography variant="body2" fontSize={14} color="#4B546F">{unit ? `${max} ${unit}` : max}</Typography>
      </Box>
      {description && (
        <Typography variant="caption" color="#4B546F">
          {description}
        </Typography>
      )}
    </Box>
  );
} 
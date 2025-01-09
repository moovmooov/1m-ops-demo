import { Tab, styled } from "@mui/material";

export const CustomTab = styled(Tab)(({ theme }) => ({
	minHeight: 48,
	textTransform: "none",
	fontSize: theme.typography.pxToRem(15),
	fontWeight: theme.typography.fontWeightRegular,
	"&.Mui-selected": {
		fontWeight: theme.typography.fontWeightMedium,
		color: "#27B6DB",
	},
	"& .MuiTabs-indicator": {
		backgroundColor: "#27B6DB",
	},
}));

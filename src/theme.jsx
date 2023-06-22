import { createTheme } from "@mui/material";
import { blue, grey, lime, purple } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        // primary: blue,
        // secondary: grey
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },

        },
        MuiAppBar: {
            defaultProps: {
                color: "primary"
            }
        }
    },
    shape: {
        // borderRadius: 

    }
})
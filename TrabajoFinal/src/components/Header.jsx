import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
// import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";

function Header() {

    // onMounted

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: "blue" }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: "block" }}
                    >
                        The Movie
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <Button
                            sx={{ color: "#ffffff", display: "none", md: { display: "block" } }}
                        >
                            Algo
                        </Button>
                        <Button sx={{ color: "#fff" }}>Otra cosa</Button>
                        <Button sx={{ color: "#fff" }}>jkdsa</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
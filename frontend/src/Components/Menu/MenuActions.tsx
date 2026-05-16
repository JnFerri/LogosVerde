import { AppBar, Toolbar, Typography } from "@mui/material"
export default function MenuActions() {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div"> Logos Verde </Typography>
            </Toolbar>
        </AppBar>
    )
    
}
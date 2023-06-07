import { Box, AppBar, Toolbar, Typography } from '@mui/material'

export default function Nav() {
    const backgroundColor = '#0fb286'
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{backgroundColor: backgroundColor}}>
                    <Toolbar>
                        <Typography
                            size="large"
                            edge="start"
                            color="inherit"
                            variant='h4'
                            sx={{ mr: 2 }}
                        >
                            51st SFS
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}
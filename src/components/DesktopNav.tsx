import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import WebIcon from '../../public/icons/icon-192x192-v2.png';

export default function DesktopNav() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color='transparent'>
                <Toolbar>
                    <Image
                        src={WebIcon}
                        alt="Landscape picture"
                        width={50}
                        height={50}
                    />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1}}
                        fontFamily="Microsoft YaHei">
                        省医放疗技术排班站
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

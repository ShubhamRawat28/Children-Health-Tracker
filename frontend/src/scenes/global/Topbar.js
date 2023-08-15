import {Box, IconButton, useTheme} from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

    return (
        <Box display="flex" justifyContent="space-between" p={2} sx={{ width: '100%' }}>
            <Box className="flex rounded-lg ml-5" backgroundColor = {colors.primary[400]}>
                <InputBase className='ml-3' flex='1' placeholder='Search'></InputBase>
                <IconButton type='button' className='p-1'>
                    <SearchOutlinedIcon/>
                </IconButton>
            </Box>
            <Box className='flex space-x-3 mr-3'>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark'? (<DarkModeOutlinedIcon sx={{fontSize:'1.7rem'}}/>):
                    (<LightModeOutlinedIcon sx={{fontSize:'1.7rem' }}/>)}
                </IconButton >
                <IconButton>
                    <NotificationsActiveOutlinedIcon sx={{fontSize:'1.7rem'}}/>
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon sx={{fontSize:'1.7rem'}}/>
                </IconButton>
                <IconButton>
                    <LogoutIcon onClick={handleLogout} sx={{fontSize:'1.7rem'}}/>
                </IconButton>
            </Box>
        </Box>
    );
}

export default Topbar;
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import React from 'react';
import logo from '../img/logo.svg';


const Topbar = () => {


    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <img src={logo} alt="Логотип Сила Любви"/>
            {/* Search Bar */}
            <Box display="flex" backgroundColor="#EFEEEE" borderRadius="30px" width="400px">
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Поиск" />
            </Box>

            

            {/* Navigation */}
            <Box display="flex">




            </Box>
        </Box>
    )
}

export default Topbar
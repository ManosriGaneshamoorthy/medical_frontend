import React from 'react';
import { Button, IconButton } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link as RouterLink } from 'react-router-dom';

function TopMenu() {
    return (
        <div className="top-menu">
            <div className="navigation">
                <IconButton><DehazeIcon/></IconButton>
            </div>
            <div className="logo">
                {/* Fix the import statement for Link */}
                <RouterLink to="/dashboard"><h2>ABC Hospital</h2></RouterLink>
            </div>
            <div>
                <Button variant="contained" color="warning" component={RouterLink} to="/">LOGOUT</Button>
            </div>
        </div>
    );
}

export default TopMenu;

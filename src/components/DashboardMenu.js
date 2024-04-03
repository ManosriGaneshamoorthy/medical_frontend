import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { Link } from 'react-router-dom';

function DashboardMenu() {
  const menu =[
    {
      url:'/Dashboard',
      icon: <DashboardIcon/>,
      name:'Dashboard',
    },
    {
      url:'/doctors',
      icon: <LocalHospitalIcon/>,
      name:'Doctors',
    },
    {
      url:'/staff',
      icon: <PersonSearchIcon/>,
      name:'Staff',
    },
    {
      url:'/branches',
      icon: <ApartmentIcon/>,
      name:'Branches',
    },
    {
      url:'/apporitment',
      icon: <AppRegistrationIcon/>,
      name:'Appointments',
    },
    {
      url:'/patients',
      icon: <PersonSearchIcon/>,
      name:'Patients',
    }
  ]
    return (
        <div className="dashboard-menu">
          <nav aria-label="main mailbox folders">
            <List>
                {menu.map((iteam)=>(
                  <Link key={iteam.url} to={iteam.url}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {iteam.icon}
                        </ListItemIcon>
                        <ListItemText primary={iteam.name} />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
            </List>
          </nav>
        </div>
    )
}

export default DashboardMenu

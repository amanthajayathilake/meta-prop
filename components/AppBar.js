import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { strings, themeColors } from '../services/Utils';
import Image from 'next/image';
import Link from 'next/link';

export default function MenuAppBar() {
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: themeColors.lightGray }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: themeColors.grayBlack,
              fontWeight: 500,
              fontSize: '28px',
              '@media (max-width: 1280px)': {
                fontSize: '24px',
              },
              '@media (max-width: 960px)': {
                fontSize: '22px',
              },
              '@media (max-width: 600px)': {
                fontSize: '18px',
              },
            }}
          >
            {strings.METAPROP}
          </Typography>
          {auth && (
            <React.Fragment>
              <Link href="/" legacyBehavior>
                <a href="/" style={{ textDecoration: 'none' }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: themeColors.black,
                      marginRight: 3,
                      fontWeight: 300,
                      fontSize: '18px',
                      '@media (max-width: 1280px)': {
                        fontSize: '20px',
                      },
                      '@media (max-width: 960px)': {
                        fontSize: '16px',
                      },
                      '@media (max-width: 600px)': {
                        fontSize: '14px',
                      },
                    }}
                  >
                    {strings.HOME}
                  </Typography>
                </a>
              </Link>
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                  sx={{ p: 0 }}
                >
                  <Image src="/Avatar.png" alt="Appbar avatar" width={40} height={40} />
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>{strings.PROFILE}</MenuItem>
                  <MenuItem onClick={handleClose}>{strings.MY_ACCOUNT}</MenuItem>
                </Menu>
              </div>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  color: themeColors.black,
                  marginLeft: 2,
                  fontWeight: 300,
                  fontSize: '18px',
                  '@media (max-width: 1280px)': {
                    fontSize: '20px',
                  },
                  '@media (max-width: 960px)': {
                    fontSize: '16px',
                  },
                  '@media (max-width: 600px)': {
                    fontSize: '14px',
                  },
                }}
              >
                {strings.MIKE}
              </Typography>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

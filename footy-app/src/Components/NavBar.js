import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const pages = ['Leagues', 'Standings', 'SAFC247'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const Logo = "./safc.png";

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let navigate = useNavigate();

  const navigatePages = (url) => {
      navigate(url);

  }

  return (
    <AppBar style={{ background: "#c62828" }} position="static"  
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters >
     

          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
         
          >
           
           FOODYFOOTY
           

          </Typography>

          <Box
            component="img"
            paddingRight="10px"
            sx={{
            height: 64,
            }}
        
          
            src="https://www.linkpicture.com/q/Sunderland-Logo-256.png"
        />
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
         <MenuItem   onClick={handleCloseNavMenu}>
                  <Typography onClick = {() => navigatePages("/leagues")}textAlign="center">Leagues</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography onClick = {()=> navigatePages("/standings")} textAlign="center">Standings</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography  onClick = { ()=>  navigatePages("/safc")}textAlign="center">SAFC247</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h3"
            noWrap
            component="div"
            
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            FOODY FOOTY
          </Typography>
          <Box  
        padding="20px"
      
          
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
       
              <Button
           
              style={{ fontSize: 17.5 }}
              onClick={()=> navigatePages("/leagues")}
            
                sx={{ my: 2, color: 'white', display: 'block' }}
                
              >
                Leagues
              </Button>
              <Button
           
           style={{ fontSize: 17.5 }}
           onClick = {()=> navigatePages("/standings")}
    
             sx={{ my: 2, color: 'white', display: 'block' }}
           >
           Standings
           </Button>
           <Button
           
           style={{ fontSize: 17.5 }}
          
           onClick = {()=> navigatePages("/safc")}
             sx={{ my: 2, color: 'white', display: 'block' }}
           >
           SAFC247
           </Button>
       
          </Box>

        
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
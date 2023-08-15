import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import Logo from '../../assets/logo.png'
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import HeightOutlinedIcon from '@mui/icons-material/HeightOutlined';
import LocalDiningOutlinedIcon from '@mui/icons-material/LocalDiningOutlined';
import LocalHotelOutlinedIcon from '@mui/icons-material/LocalHotelOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          background: `transparent !important`,
        },
        "& .pro-inner-item": {
          padding: "0.5rem 3rem 0.5rem 1.3rem !important",
        },
        "& .pro-inner-item:hover": {
          color: `#868dfb !important`,
        },
        "& .pro-menu-item.active": {
          color: `#868dfb !important`,
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "1rem 0 1rem 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box 
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="0.8rem">
                <img
                  src={Logo}
                  alt="Logo"
                  width="70px"
                  height="80px"
                />
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box >
              <Box className='flex' justifyContent={"center"}>
              <Typography
                  variant="h1"
                  color={colors.greenAccent[100]}
                  fontWeight="bold"
                  sx={{ m: "1rem 0 0 0" }}
                >
                  Hi
                </Typography>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "1rem 0 0 0" }}
                >
                  shubham
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Overview"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "1rem 0 0.5rem 1.5rem" }}
            >
              Data
            </Typography>
            <Item
              title="Weight"
              to="/weight"
              icon={<FitnessCenterOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Height"
              to="/height"
              icon={<HeightOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Food"
              to="/food"
              icon={<LocalDiningOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sleep"
              to="/sleep"
              icon={<LocalHotelOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "1.5rem 0 0.5rem 0.6rem" }}
            >
              Remindars
            </Typography>
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "1rem 0 0.5rem 1.7rem" }}
            >
              Ask 
            </Typography>
            <Item
              title="Ask Bot"
              to="/chat"
              icon={<SmartToyOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;

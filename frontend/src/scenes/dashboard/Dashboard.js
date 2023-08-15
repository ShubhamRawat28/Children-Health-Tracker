import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { sleepHours, weight, height, food, totalFood, increaseFood, increaseHeight,increaseSleep,increaseWeight } from "../../data/userData";
import HeightIcon from '@mui/icons-material/Height';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import EggAltOutlinedIcon from '@mui/icons-material/EggAltOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import Man2OutlinedIcon from '@mui/icons-material/Man2Outlined';
import { foodData as data } from "../../data/userData";

const Dashboard = () => {
  const themes = useTheme();
  const colors = tokens(themes.palette.mode);

  return (
    <Box m=".4rem">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="125px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={sleepHours + " hours"}
            subtitle="Sleep Hours"
            progress= {increaseSleep/100}
            increase= {increaseSleep + '%'}
            icon={
              <BedtimeOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "3rem" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title= {food + " calories"}
            subtitle="Food Intake"
            progress= {increaseFood/100}
            increase= {increaseFood + '%'}
            icon={
              <EggAltOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "3rem" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={weight + " kgs"}
            subtitle="Weight"
            progress= {increaseWeight/100}
            increase= {increaseWeight + '%'}
            icon={
              <ScaleOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "3rem" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={height + " cm"}
            subtitle="Height"
            progress= {increaseHeight/100}
            increase= {increaseHeight + '%'}
            icon={
              <Man2OutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "3rem" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span 3"
          ml={1}
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h2"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Food intake
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                {totalFood + " calories"}
              </Typography>
            </Box>
           
          </Box>
          <Box height="20rem" m="-10px 0 0 0">
            <LineChart graphData={data} isDashboard={true} yTitle='Food intake (calories)' xTitle='Date'/>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
            <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`0.1rem solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
          <StatBox
            title={height + " cm"}
            subtitle="Average Height"
            progress= {increaseWeight/100}
            increase= {increaseWeight + '%'}
            icon={
              <HeightIcon
                sx={{ color: colors.greenAccent[600], fontSize: "3rem" }}
              />
            }
          />
            </Box>
            <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`.1rem solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
          <StatBox
            title={weight + " kgs"}
            subtitle="Average Weight"
            progress= {increaseWeight/100}
            increase= {increaseWeight + '%'}
            icon={
              <ScaleOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "3rem" }}
              />
            }
          />
            </Box>
            <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`.1rem solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="1rem"
          >
          <StatBox
            title={weight/height*height + " "}
            subtitle="Body Mass Index"
            progress= {increaseWeight/100}
            increase= {increaseWeight + '%'}
            icon={
              <Typography
                sx={{ color: colors.greenAccent[600], fontSize: "2rem" }}
              >
              BMI
              </Typography>
            }
          />
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
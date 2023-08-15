import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is Children Health Tracker?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Children Health Tracker is a tool designed to help parents and guardians monitor and manage their child's health. It allows you to track parameters like sleep, diet, weight, height, and much more
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How do I input data into the tracker?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Once logged in, navigate to your child's profile. You'll see different sections for sleep, diet, etc. You can add data into the respective section.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can the Children Health Tracker help my child
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our tool provides you with valuable insights about your child's health and development. These insights can help you make informed decisions about their nutrition, sleep schedule, and overall well-being.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What kind of support is available if I run into issues using the tracker?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our support team is available 24/7 to assist you. Please reach out to us via email or use the 'Help' feature within our website
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
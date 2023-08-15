import { Box } from "@mui/material";
import Header from '../../components/Header';
import InputField from "../../components/popover";

const Food = () => {
    return (
        <Box m='2rem'>
            <Header title='Food Intake' subtitle='Weekly Food Intake'/>
            <InputField inputItem={"food"} title="Food"/>
        </Box>
    )
}

export default Food;
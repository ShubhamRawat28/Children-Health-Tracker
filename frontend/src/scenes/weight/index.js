import { Box } from "@mui/material";
import Header from '../../components/Header';
import InputField from "../../components/popover";

const Weight = () => {
    return (
        <Box m='2rem'>
            <Header title='Weight Information' subtitle='Weight Tracked'/>
            <InputField inputItem={"weight"} title="Weight"/>
        </Box>
    )
}

export default Weight;
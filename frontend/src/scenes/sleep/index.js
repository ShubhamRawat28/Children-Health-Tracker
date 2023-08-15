import { Box } from "@mui/material";
import Header from '../../components/Header';
import InputField from "../../components/popover";

const Sleep = () => {
    return (
        <Box m='2rem'>
            <Header title='Sleep Information' subtitle='Weekly sleep time'/>
            <InputField inputItem={"sleep"} title="Sleep"/>
        </Box>
    )
}

export default Sleep
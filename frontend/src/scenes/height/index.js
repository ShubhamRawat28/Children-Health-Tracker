import { Box } from "@mui/material";
import Header from '../../components/Header';
import InputField from "../../components/popover";

const Height = () => {
    return (
        <Box m='2rem'>
            <Header title='Height' subtitle='Height tracked'/>
            <InputField inputItem={"height"} title="Height"/>
        </Box>
    )
}

export default Height;
import React, { useState } from "react";
import { Button, Popover, TextField, Typography } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import { tokens } from '../theme';
import { Box } from "@mui/material";
import LineChart from "./LineChart";

const InputField = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValue, setInputValue] = useState("");
  let [selectedDate, handleDateChange] = useState(null);
  // food data
  const [foodData, setFoodData] = useState([
    {
      "id": "food",
      color: tokens("dark").greenAccent[500],
      "data": [
        {
          "x": "1/1/2023",
          "y": 100
        },
        {
          "x": "2/1/2023",
          "y": 300
        },
        {
          "x": "3/1/2023",
          "y": 500
        },
      ]
    },
  ]);

  //sleep data
  const [sleepData, setSleepData] = useState([
    {
      "id": "Sleep",
      color: tokens("dark").greenAccent[500],
      "data": [
        {
          "x": "1/1/2023",
          "y": 7
        },
        {
          "x": "2/1/2023",
          "y": 5
        },
        {
          "x": "3/1/2023",
          "y": 8
        },
        {
          "x": "4/1/2023",
          "y": 9
        },
      ]
    },
  ]);
  //weight data
  const [weightData, setWeightData] = useState([
    {
      "id": "weight",
      color: tokens("dark").greenAccent[500],
      "data": [
        {
          "x": "1/1/2023",
          "y": 70
        },
        {
          "x": "2/1/2023",
          "y": 70.5
        },
        {
          "x": "3/1/2023",
          "y": 70
        },
        {
          "x": "4/1/2023",
          "y": 71
        },
      ]
    },
  ]);
  //height data
  const [heightData, setHeightData] = useState([
    {
      "id": "height",
      color: tokens("dark").greenAccent[500],
      "data": [
        {
          "x": "1/1/2023",
          "y": 120
        },
        {
          "x": "6/1/2023",
          "y": 121
        },
        {
          "x": "4/5/2023",
          "y": 124
        },
      ]
    },
  ]);
  //initialize data
  let data;
  if(props.inputItem === "sleep") {
  data = sleepData;
  } else if(props.inputItem === "weight") {
    data = weightData;
  } else if(props.inputItem === "height") {
    data = heightData;
  } else if(props.inputItem === "food") {
    data = foodData;
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSubmit = async () => {
    console.log("Submitted value:", inputValue);
    console.log("Selected date:", selectedDate);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/submitData",
        {
          userId: "64bb3dcfb1047b8fbb9f49d3", // Replace with the actual user ID from MongoDB
          inputItem: props.inputItem,
          inputValue: inputValue,
          selectedDate: selectedDate,
        }
      );
      selectedDate = new Date(selectedDate);
      let month = selectedDate.getMonth() + 1;
      let year = selectedDate.getFullYear();
      let day = selectedDate.getDate();
      let date = day + "/" + month + "/" + year;
      console.log(date);
      const newData = { x: date, y: inputValue };
      if (props.inputItem === "sleep") {
        setSleepData((currentData) => [
          {
            ...currentData[0], 
            data: [
              ...currentData[0].data,
              newData
            ]
          }
        ]);
      } else if (props.inputItem === "weight") {
        setWeightData((currentData) => [
          {
            ...currentData[0], 
            data: [
              ...currentData[0].data,
              newData
            ]
          }
        ]);
      } else if (props.inputItem === "height") {
        setHeightData((currentData) => [
          {
            ...currentData[0],
            data: [
              ...currentData[0].data,
              newData
            ]
          }
        ]);
      } else if (props.inputItem === "food") {
        setFoodData((currentData) => [
          {
            ...currentData[0], 
            data: [
              ...currentData[0].data,
              newData
            ]
          }
        ]);
      }
      console.log(response.data.message);
    } catch (error) {
      console.error("Error submitting data:", error);
    }

    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "input-field-popover" : undefined;

  return (
    <div className="ml-6 border-5xl border-white">
      <Button onClick={handleClick} variant="contained">
        Add Data
        <AddIcon className="ml-1 mb-2" sx={{ fontSize: "1.2rem" }} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div style={{ padding: "16px" }}>
          <Typography variant="h6" gutterBottom>
            {"Enter " + props.inputItem + " and Date"}
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={(date) => handleDateChange(date)}
              />
            </DemoContainer>
          </LocalizationProvider>
          <TextField
            label={props.title}
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </div>
      </Popover>
      <Box height='70vh'>
            <LineChart graphData={data} yTitle={props.title} xTitle='Date'/>
      </Box>
    </div>
  );
};

export default InputField;

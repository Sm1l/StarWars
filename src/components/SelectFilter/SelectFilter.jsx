import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectFilter = ({ colorEye, setColorEye }) => {
  const handleChange = (event) => {
    setColorEye(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-helper-label">Color eye</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={colorEye}
          label="Color eye"
          onChange={handleChange}
        >
          <MenuItem value={"all"}>all</MenuItem>
          <MenuItem value={"blue"}>blue</MenuItem>
          <MenuItem value={"yellow"}>yellow</MenuItem>
          <MenuItem value={"red"}>red</MenuItem>
          <MenuItem value={"brown"}>brown</MenuItem>
          <MenuItem value={"blue-gray"}>blue-gray</MenuItem>
          <MenuItem value={"black"}>black</MenuItem>
          <MenuItem value={"orange"}>orange</MenuItem>
          <MenuItem value={"hazel"}>hazel</MenuItem>
          <MenuItem value={"unknown"}>unknown</MenuItem>
          <MenuItem value={"gold"}>gold</MenuItem>
          <MenuItem value={"green, yellow"}>green</MenuItem>
          <MenuItem value={"white"}>white</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export { SelectFilter };

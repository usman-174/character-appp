import { Input } from "@material-tailwind/react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";
import React from "react";
const SearchBox = ({
  size,
  setSize,
  query,
  setQuery,
  resetFilters,
  filterExist,
}) => {
  return (
    <div
      className=" rounded-sm  mx-auto md:my-2 flex 
    justify-center items-center"
    >
      <div className="md:w-[40%] w-[50%]">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          variant="outlined"
          className="text-black p-1 rounded-md"
          placeholder="Search By Name e.g Archer..."
        />
      </div>
      <FormControl
        className="test"
        sx={{
          m: 1,
          minWidth: 10,
          padding: "0",
          boxShadow: "0px 0px 2px  #fff",
        }}
        size="small"
      >
        <InputLabel
          id="demo-simple-select-autowidth-label"
          sx={{ color: "white", fontSize: "13px" }}
        >
          SIZE
        </InputLabel>
        <Select
          disabled={query.length >= 2}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          autoWidth
          label="Size"
          sx={{ color: "white", fontSize: "13px" }}
        >
          <MenuItem sx={{ fontSize: "13px" }} value={10}>
            10
          </MenuItem>
          <MenuItem sx={{ fontSize: "13px" }} value={25}>
            25
          </MenuItem>
          <MenuItem sx={{ fontSize: "13px" }} value={50}>
            50
          </MenuItem>
        </Select>
      </FormControl>


      {filterExist ? (
        <Button variant="text" size="small" sx={{padding:"0", color: "red", fontSize: "9px" }} onClick={()=>resetFilters()}>
          Reset{" "}
        </Button>
      ) : null}
    </div>
  );
};

export default SearchBox;

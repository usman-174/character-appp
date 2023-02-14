import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
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
      className=" rounded-sm  mx-auto my-2 flex 
    justify-center items-center"
    >
      <TextField
        id="filled-basic"
        label="Search"
        variant="filled"
        className="searching"
        sx={{
          background: "white",
          borderRadius: "3px",
          color: "white",
          width: "40%",
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        size="small"
      />
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel
          id="demo-simple-select-autowidth-label"
          sx={{ color: "white" }}
        >
          Entries
        </InputLabel>
        <Select
          disabled={query.length >= 2}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          autoWidth
          label="Age"
          sx={{ color: "white" }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
      {filterExist ? <span  className="text-red-500 cursor-pointer" onClick={() => resetFilters()}>Reset</span> : null}
    </div>
  );
};

export default SearchBox;

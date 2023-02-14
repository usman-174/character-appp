import { Input } from "@material-tailwind/react";
import {
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
      {/* <TextField
        id="filled-basic"
        label="Search"
        // variant="filled"
        className="searching"
        sx={{
          background: "white",
          borderRadius: "4px",
          fontSize:"16px",
          padding:"0px",
          color: "white",
          width: "40%",
          height: 40,
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        size="small"
      /> */}
      <div className="w-[40%]">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          variant="outlined"
          className="text-black p-1 rounded-md"
          placeholder="Search By Name e.g Archer..."
        />
      </div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel
          id="demo-simple-select-autowidth-label"
         
          sx={{ color: "white" ,fontSize: "13px" }}
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
          sx={{ color: "white" ,fontSize: "13px"}}
        >
          <MenuItem sx={{ fontSize: "13px"}} value={10}>10</MenuItem>
          <MenuItem sx={{ fontSize: "13px"}} value={25}>25</MenuItem>
          <MenuItem sx={{ fontSize: "13px"}} value={50}>50</MenuItem>
        </Select>
      </FormControl>
      {filterExist ? (
        <span
          className="text-red-500 cursor-pointer"
          onClick={() => resetFilters()}
        >
          Reset
        </span>
      ) : null}
    </div>
  );
};

export default SearchBox;

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useId } from "react";
const FilterBox = ({
  series,
  setSelectedSeries,
  selectedSeries,
  franchises,
  selectedFranchise,
  setSelectedFranchise,
  setItemOffset,
}) => {
  const keyId = useId();
  const handleChangeSeries = (event) => {
    if (event.target.value === "" || selectedSeries === "") {
      setItemOffset(0);
    }
    setSelectedSeries(event.target.value);
  };
  const handleChangeFranchise = (event) => {
    if (event.target.value === "" || selectedFranchise === "") {
      setItemOffset(0);
    }
    setSelectedFranchise(event.target.value);
  };
  return (
    <div className="bg-black w-4/5 md:w-3/5 rounded-sm  mx-auto md:my-2 flex justify-center items-center">
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel
          id="demo-simple-select-helper-label"
          sx={{ color: "white", fontSize: "13px" }}
          size="small"
        >
          Series
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectedSeries}
          sx={{ color: "white", fontSize: "13px" }}
          label="Series"
          onChange={handleChangeSeries}
        >
          <MenuItem sx={{ fontSize: "13px" }} value={""}>
            All
          </MenuItem>

          {series.map((serie) => (
            <MenuItem sx={{ fontSize: "13px" }} value={serie}>
              {serie}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel
          id="demo-simple-select-helper-label"
          sx={{ color: "white", fontSize: "13px" }}
          size="small"
        >
          Franchise
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectedFranchise}
          label="Franchise"
          sx={{ color: "white", fontSize: "13px" }}
          onChange={handleChangeFranchise}
        >
          <MenuItem value={""} sx={{ fontSize: "13px" }}>
            All
          </MenuItem>

          {franchises.map((franchise) => (
            <MenuItem
              sx={{ fontSize: "13px" }}
              key={franchise + keyId}
              value={franchise}
            >
              {franchise}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterBox;

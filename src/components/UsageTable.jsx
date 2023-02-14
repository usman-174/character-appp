import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";

const columns = [
  { field: "gameName", headerName: "Game", width: 280, align: "left" },
  { field: "usage", headerName: "Details", width: 600 },
];

export default function UsageTable({ usage }) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
    
        sx={{ color: "white", m: 2, boxShadow: 2, border: 2,fontSize:12 }}
        rows={usage}
        getRowId={(row) => row.usage+row.gameName}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick={true}
        // isRowSelectable={false}
        rowsPerPageOptions={[7]}
      />
    </div>
  );
}

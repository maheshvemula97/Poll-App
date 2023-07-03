import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridRenderCellParams,
} from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    renderCell: (params: GridRenderCellParams<any>) => (
      <strong data-testid="data-title">{params.row.title}</strong>
    ),
  },
  {
    field: "author",
    headerName: "Author name",
    flex: 1,
  },
  {
    field: "url",
    headerName: "Author URL",
    flex: 1,
    renderCell: (params: GridRenderCellParams<any>) => (
      <strong>
        <a
          data-testid="data-url"
          href={params.row.url}
          target="_blank"
          rel="noreferrer"
        >
          {params.row.url}
        </a>
      </strong>
    ),
  },
  {
    field: "created_at",
    headerName: "CreatedAt",
    flex: 1,
  },
  {
    field: "num_comments",
    headerName: "Tags",
    flex: 1,
  },
];

const PolllistGrid: React.FC<any> = ({ data, searchText, navigate }) => {
  // const rowHandleEvent: GridEventListener<"rowClick"> = (
  //   params // GridRowParams
  // ) => {
  //   let obj = data.find((item: any) => item.objectID === params.row.id);
  //   navigate(`/poll/${params.row.id}`, { state: { obj: obj } });
  // };
  const filteredRows = React.useMemo(() => {
    if (!searchText) return data;
    const lowerCaseSearchText = searchText.toLowerCase();
    return data.filter(
      (item: any) =>
        item.title.toLowerCase().includes(lowerCaseSearchText) ||
        item.author.toLowerCase().includes(lowerCaseSearchText)
    );
  }, [data, searchText]);

  return (
    <Box sx={{ height: "85vh", width: "100%" }} data-testid="poll-grid">
      <DataGrid
        // onRowClick={rowHandleEvent}
        rows={filteredRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        getRowId={(row) => row.objectID}
        pageSizeOptions={[10, 20, 30, 40]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};
export default PolllistGrid;

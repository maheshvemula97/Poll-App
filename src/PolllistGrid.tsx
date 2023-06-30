import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const columns: GridColDef[] = [
  { field: "title", headerName: "Title" },
  {
    field: "authorName",
    headerName: "Author name",
    flex: 1,
  },
  {
    field: "authorUrl",
    headerName: "Author URL",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "CreatedAt",
    flex: 1,
  },
  {
    field: "tag",
    headerName: "Tags",
    flex: 1,
  },
];

const PolllistGrid: React.FC<any> = ({ data, searchText }) => {
  const navigate = useNavigate();
  const [rows, setRows] = React.useState([]);
  const [displayedRows, setDisplayedRows] = React.useState(rows);

  const rowHandleEvent: GridEventListener<"rowClick"> = (
    params // GridRowParams
  ) => {
    let obj = data.find((item: any) => item.objectID === params.row.id);
    navigate(`/poll/${params.row.id}`, { state: { obj: obj } });
  };

  React.useEffect(() => {
    setRows(
      data?.map((item: any) => {
        return {
          id: item.objectID,
          title: item.title,
          authorName: item.author,
          authorUrl: item.url,
          createdAt: item.created_at,
          tag: item.num_comments,
        };
      })
    );
  }, [data]);
  React.useEffect(() => {
    if (searchText === "") {
      setDisplayedRows(rows);
    } else {
      let filterData = displayedRows.filter(
        (item: any) =>
          item.title.toLowerCase().includes(searchText?.toLowerCase()) ||
          item.authorName.toLowerCase().includes(searchText?.toLowerCase())
      );
      setDisplayedRows(filterData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, searchText]);
  console.log(displayedRows);

  return (
    <Box sx={{ height: "85vh", width: "100%" }}>
      <DataGrid
        onRowClick={rowHandleEvent}
        rows={displayedRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[10, 20, 30, 40]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};
export default PolllistGrid;

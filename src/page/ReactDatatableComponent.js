import React, { useState, useEffect, useCallback, useMemo } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import SortIcon from "@material-ui/icons/ArrowDownward";
// import "./styles.css";
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { IconButton } from '@material-ui/core';
import {ProgressLoader3} from './../components/Progressing'

const PaginationDataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // const [deleted, setDeleted] = useState([]);

  const fetchUsers = async (page, size = perPage) => {
    setLoading(true);
    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}&per_page=${size}&delay=1`
    );
    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
    // console.log(response.data.data);
  };

  useEffect(() => {
    fetchUsers(1);
  }, []);

  // const handleDelete = useCallback(
  //   (row) => async () => {
  //     await axios.delete(`https://reqres.in/api/users/${row.id}`);
  //     const response = await axios.get(
  //       `https://reqres.in/api/users?page=${currentPage}&per_page=${perPage}`
  //     );

  //     setData(removeItem(response.data.data, row));
  //     setTotalRows(totalRows - 1);
  //   },
  //   [currentPage, perPage, totalRows]
  // );

  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row) => row.id < 3,
          style: {
            backgroundColor: "red",
            color: "white",
            "&:hover": {
              cursor: "pointer"
            }
          }
        },
        {
          when: (row) => row.id > 4 && row.id < 8,
          style: {
            backgroundColor: "green",
            color: "white",
            "&:hover": {
              cursor: "pointer"
            }
          }
        }
      ]
    },
    {
      name: "First Name",
      selector: "first_name",
      sortable: true
    },
    {
      name: "Last Name",
      selector: "last_name",
      sortable: true,
      right: false
    },
    {
      name: "Email",
      selector: "email",
      sortable: true
    },
    {
    name: 'Avatar',
    grow: 0,
    cell: row => <img height="84px" width="56px" alt={row.avatar} src={row.avatar} />,
  },
    {
      cell: (row) => (
        <>
          <IconButton aria-label="delete" onClick={()=>handleViewData(row.id)} title="view data" color="primary">
            <VisibilityIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={()=>handleDeleteData(row.id)} title="delete data" color="secondary">
            <DeleteIcon />
          </IconButton>
        </>
      )
    }
  ];

  const handlePageChange = (page) => {
    fetchUsers(page);
    setCurrentPage(page);
    console.log("Now Position page is: " + page);
  };

  const handleChangeDataPerPage = async (newPerPage, page) => {
    console.log("Change view data per page to : " + newPerPage);
    setPerPage(newPerPage);
    fetchUsers(page, newPerPage);
  };
const handleViewData = (dta) => {
    alert("view datas: " + dta);
  };
  const handleDeleteData = (dta) => {
    alert("Delete data : " + dta);
  };
  return (
    loading ? <ProgressLoader3/>:
    <>
    <Card>
      <DataTable
        title="Users"
        columns={columns}
        data={data}
        fixedHeader
        fixedHeaderScrollHeight="600px"
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        paginationDefaultPage={currentPage}
        onChangeRowsPerPage={handleChangeDataPerPage}
        onChangePage={handlePageChange}
        selectableRows
        selectableRowsComponent={Checkbox}
        // conditionalRowStyles={conditionalRowStyles}
        onSelectedRowsChange={({ selectedRows }) => console.log(selectedRows)}
      />
      </Card>
    </>
  );
};

const conditionalRowStyles = [
  {
    when: (row) => row.id > 7 && row.id < 10,
    style: {
      backgroundColor: "grey",
      color: "white",
      "&:hover": {
        cursor: "pointer"
      }
    }
  },
  {
    when: (row) => row.id >= 10 && row.id <= 10,
    style: {
      backgroundColor: "orange",
      color: "white",
      "&:hover": {
        cursor: "pointer"
      }
    }
  }
];

function App() {
  return (
    <div className="App">
      <PaginationDataTable />
    </div>
  );
}
export default App

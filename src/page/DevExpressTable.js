import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import './../modules/style/TableStyle.css';
import {ProgressLoader1} from './../components/Progressing'
import {
  FilteringState,
  PagingState,
  CustomPaging
} from "@devexpress/dx-react-grid";

import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableFilterRow,
  PagingPanel,
  Table
} from "@devexpress/dx-react-grid-material-ui";
import TableSceleton from './../modules/table_sceleton'

const URL = "https://transys.id/customer/API_React/get_country";

export default () => {
  const [columns] = useState([
    { name: "pid", title: " PID" },
    { name: "id_country", title: " ID COUNTRY" },
    { name: "name", title: " NAME" },
    { name: "description", title: " DESC" },
    { name: "iso_code", title: "ISO CODE" },
    { name: "created_by", title: " CREATE BY" },
    { name: "action", title: " #" }
  ]);
  const [rows, setRows] = useState([]);
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progressload, setprogressload] = useState(true);
  const [lastQuery, setLastQuery] = useState();
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);

  const getQueryString = () => {
    let filter = filters
      .reduce((acc, { columnName, value }) => {
        acc.push(
          `["${columnName}", "contains", "${encodeURIComponent(value)}"]`
        );
        return acc;
      }, [])
      .join(',"and",');

    if (filters.length > 1) {
      filter = `[${filter}]`;
    }

    return `${URL}?filter=${filter}&requireTotalCount=true&take=${pageSize}&skip=${pageSize * currentPage}`;
  };

  const loadData = () => {
    const queryString = getQueryString();

    if (queryString !== lastQuery && !loading) {
      setLoading(true);
      fetch(queryString)
        .then(response => response.json())
        .then(orders => {
          setRows(orders.data);
          setTotalCount(orders.totalCount);
          setLoading(false);
          setprogressload(false);
          setLastQuery(queryString);
        })
        .catch(() => setLoading(false));
      setLastQuery(queryString);
    }
  };

useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    // progressload ? <ProgressLoader1/>:
    progressload ? <TableSceleton loading={progressload}/>:
    <>
    <div className="row">
      <div className="col-12">
        <div className="card">
            <div className="card-body">
              <h4 className="card-title">Dev Expreas Table</h4>
              <div className="add-items d-flex">
                <button className="add btn btn-primary font-weight-bold todo-list-add-btn" id="add-task">New</button>
              </div>
              <Paper style={{ position: "relative" }}>
                <Grid rows={rows} columns={columns} aksi={`aa`}>
                    <PagingState
                      currentPage={currentPage}
                      onCurrentPageChange={setCurrentPage}
                      pageSize={pageSize}
                    />
                    <CustomPaging totalCount={totalCount} />
                    <FilteringState onFiltersChange={setFilters} />

                    <VirtualTable />
                    <TableHeaderRow />
                    <TableFilterRow />
                    <PagingPanel />
                </Grid>
                {loading && <ProgressLoader1 />}
                </Paper>
            </div>
          </div>
      </div>
    </div>
  </>
);
};

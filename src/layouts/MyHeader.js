
import React from 'react'
import {
  Link
} from "react-router-dom";

const MyHeader=()=>{
  return(
    <div className="my-header">
      <nav className="">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ReactDatatableComponent">ReactDatatableComponent</Link>
            </li>
            <li>
              <Link to="/ReactTables">ReactTables</Link>
            </li>
            <li>
              <Link to="/ReactTables">ReactTables</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}
export default MyHeader
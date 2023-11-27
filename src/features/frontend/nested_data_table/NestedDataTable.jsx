import { useMemo, useState, useEffect } from "react";
import { useTable } from "react-table";
import MOCK_NESTED_DATA from "./parent_child_MOCK_DATA";
import { COLUMNS } from "./Columns";

import "./table.css";

function NestedDataTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_NESTED_DATA, []);

  const [hiddenColumns, setHiddenColumns] = useState(new Set());
  const [selectedColumn, setSelectedColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [rowsData, setRowsData] = useState([]);

  const [originalData, setOriginalData] = useState([]);


  const handleSearch = (column, query) => {
    const filteredRows = rowsData.filter((row) => {
      
      // const cellValue = row.original + "." + column

      const cellValue = row.original[column];

      

      return cellValue.toLowerCase().includes(query.toLowerCase());
    });
    setRowsData(filteredRows);
  };

  //===================================================
  const handleReset = () => {
    // Restore the original unfiltered data
    setRowsData(originalData);
  };

  //===================================================

  const tableInstance = useTable({
    columns,
    data,
  });

 
  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;



  return (
    <div>
      NESTED DATA EXAMPLE
      {rows}
    </div>
  );
}

export default NestedDataTable;

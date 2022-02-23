import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import "./customDataTable.scss";
function CustomDataTable({
  dataDetailTitle = "",
  dataDetailName = "",
  dataDetailColumns = [],
  data = [],
  buttons = [],
  columns = [],
  onSelectedData = (rowData) => {},
  currentDateTime = Date().toLocaleString(),
  editAuth = true,
}) {
  const [expandedRows, setExpandedRows] = useState(null);
  const [globalFilter, setGlobalFilter] = useState("");
  const dt = useRef(null);
  const exportColumns = columns.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));
  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({
      selectionOnly,
      fileName: `invifo-${currentDateTime}.pdf`,
    });
  };
  const exportPdf = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(exportColumns, data);
        doc.save(`invifo-${currentDateTime}.pdf`);
      });
    });
  };
  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      saveAsExcelFile(excelBuffer, `invifo-${currentDateTime}`);
    });
  };
  const saveAsExcelFile = (buffer, fileName) => {
    import("file-saver").then((FileSaver) => {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  };
  const header = (
    <div className="table-header">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6 my-1">
          {editAuth && buttons.length > 0 ? (
            <React.Fragment>
              {buttons.map((button, index) => (
                <button
                  key={index}
                  type="button"
                  className={`btn btn-${
                    button.color ? button.color : "primary"
                  } btn-md`}
                  style={{ marginRight: "5px" }}
                  variant="primary"
                  onClick={button.onClick}
                >
                  {button.icon ? <i className={button.icon}></i> : null}
                  {button.name}
                </button>
              ))}
            </React.Fragment>
          ) : null}

          <button
            type="button"
            onClick={exportPdf}
            className="btn btn-icon btn-circle btn-danger btn-md"
            style={{ marginRight: "5px" }}
          >
            <i className="fas fa-file-pdf"></i>
          </button>

          <button
            type="button"
            onClick={exportExcel}
            className="btn btn-icon btn-circle btn-success btn-md"
            style={{ marginRight: "5px" }}
          >
            <i className="fas fa-file-excel"></i>
          </button>

          <button
            type="button"
            onClick={() => exportCSV(false)}
            className="btn btn-icon btn-circle btn-info btn-md"
            style={{ marginRight: "5px" }}
          >
            <i className="fas fa-file-csv"></i>
          </button>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 my-1">
          <span className="p-input-icon-left float-end">
            <i className="pi pi-search" />
            <InputText
              type="search"
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="Global Search"
            />
          </span>

          <button
            type="button"
            className="btn btn-primary btn-sm float-end"
            style={{ marginRight: "5px" }}
            onClick={() => {
              setGlobalFilter("");
              dt.current.reset();
            }}
          >
            <i className="fas fa-filter"></i>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <div className="card datatable-responsive datatable-filter">
      <DataTable
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        rowExpansionTemplate={(rowData) => (
          <React.Fragment>
            {dataDetailName !== "" ? (
              <React.Fragment>
                <h5>{dataDetailTitle}</h5>
                <DataTable value={rowData[dataDetailName]}>
                  {dataDetailColumns.map((column, index) => (
                    <Column
                      headerStyle={{ display: "" }}
                      key={index}
                      header={column.header}
                      field={column.field}
                      body={column.body}
                      sortable={column.sortable}
                    />
                  ))}
                </DataTable>
              </React.Fragment>
            ) : null}
          </React.Fragment>
        )}
        header={header}
        globalFilter={globalFilter}
        value={data}
        paginator
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        rows={10}
        selectionMode="single"
        onSelectionChange={(e) => onSelectedData(e.value)}
        rowsPerPageOptions={[5, 10, 25, 50, 100, 200]}
        paginatorLeft={
          <Button
            type="button"
            icon="pi pi-refresh"
            className="p-button-text"
          />
        }
        paginatorRight={
          <Button type="button" icon="pi pi-cloud" className="p-button-text" />
        }
        ref={dt}
        className="p-datatable-sm p-datatable-striped p-datatable-responsive"
        emptyMessage="You have no data at this time"
        //reorderableColumns
      >
        {dataDetailName !== "" ? (
          <Column expander style={{ width: "3em" }} />
        ) : null}
        {columns.map((column, index) => (
          <Column
            key={index}
            header={column.header}
            field={column.field}
            body={column.body}
            sortable={column.sortable}
            style={{
              width: `${column.header === "ID" ? "80px" : null}`,
            }}
            filter={column.filter}
            filterPlaceholder={`🔍 ${column.header}`}
            filterElement={column.filterElement}
            filterFunction={column.filterFunction}
          />
        ))}
      </DataTable>
    </div>
  );
}

export default CustomDataTable;
